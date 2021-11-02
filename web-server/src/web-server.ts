import { createServer } from 'http'
import { readExample } from './file-system'
import { timeString } from './utils'

const launch = async (
	hostname: string,
	port: number,
): Promise<void> => {
	const server = createServer((req, res) => {
		let requestBody = ''

		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
		res.setHeader('Access-Control-Allow-Headers', '*')

		req.on('data', chunk => {
			requestBody += chunk
		})
		req.on('end', () => {
			const method = req.method;
			console.log(`\n[${timeString(new Date())}] <${method}>`)
			let responseBody: string = "";
			try {
				const url = req.url;
				const example = readExample();
				responseBody = JSON.stringify({ method, requestBody, url, example });
				res.statusCode = 200
			}
			catch (err) {
				const { stack, message } = (<Error>err);
				responseBody = JSON.stringify({ message, stack });
				res.statusCode = 500
			}
			finally {
				res.setHeader('Content-Type', 'application/json; charset=utf-8')
				res.end(responseBody);
			}
		})
	})

	server.listen(port, hostname, () => {
		console.log(`[${timeString(new Date())}] Server started at http://${hostname}:${port}`)
	})
}

launch('localhost', 8080).catch(err => console.log('Launch error', err));

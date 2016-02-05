import express from 'express';
import { renderToString as render } from 'react-dom/server';
import { readFileSync } from 'fs';
import morphine from '../lib/resources';
import monarch$ from '../app/routes';

const indexHtml = readFileSync('./index.html').toString();
export default ({PORT})=>{
    const app = express();
    app.use(morphine.router);
    app.use(express.static(`./www`));
    app.get('/favicon.ico', (req, res)=> res.end());
    app.get('/*', (req, res)=>{
        monarch$(req.url)
            .take(1)
            .subscribe(({content, state})=> res.send(indexHtml.replace('{{APP}}', render(content)).replace('{{STATE}}', JSON.stringify(state))));
    });
    return app.listen(PORT, ()=>{
        console.log(`Server running on port: ${PORT}`);
    });
};

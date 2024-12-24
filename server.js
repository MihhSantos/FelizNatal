const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const message = `
    <html>
      <head>
        <title>Mensagem de Natal</title>
        <style>
          body {
            font-family: 'Courier New', Courier, monospace;
            background-color: #0d1117;
            color: #c9d1d9;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            margin: 0;
          }
          pre {
            font-size: 1.2rem;
            line-height: 1.5;
          }
          .highlight {
            color: #39d353;
          }
          .comment {
            color: #8b949e;
          }
          .tree {
            margin-top: 20px;
            text-align: center;
          }
          .tree .star {
            color: gold;
            font-size: 2rem;
            animation: twinkle 1.5s infinite;
          }
          .tree .lights {
            animation: blink 1.5s infinite;
          }
          @keyframes twinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes blink {
            0%, 100% { color: #ff0000; }
            25% { color: #00ff00; }
            50% { color: #0000ff; }
            75% { color: #ffff00; }
          }
        </style>
      </head>
      <body>
        <pre>
<span class="comment">// Uma mensagem especial para você!</span>

<span class="highlight">function</span> FelizNatal() {
  <span class="highlight">const</span> mensagem = <span class="highlight">"Fran que seu Natal seja repleto de amor, alegria e união!"</span>;
  <span class="highlight">return</span> mensagem;
}

<span class="comment">// Exibindo a mensagem no console da vida:</span>
console.log(FelizNatal());
        </pre>

        <div class="tree">
          <div class="star">★</div>
          <div class="lights">▲</div>
          <div class="lights">▲▲</div>
          <div class="lights">▲▲▲</div>
          <div class="lights">▲▲▲▲</div>
          <div style="color: brown;">■■■</div>
        </div>
      </body>
    </html>
  `;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

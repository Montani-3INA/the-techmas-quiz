import Snowfall from 'react-snowfall'

export default function NotFound() {
  return (
    <div className="not-found">
      <Snowfall 
          changeFrequency="1000"
          snowflakeCount={1000}
          color = "white"
          />
        <div class="content">
        <canvas class="snow" id="snow"></canvas>
        <div class="main-text">
            <h1>404 Not Found</h1>
            <p>La pagina che stai cercando non esiste.</p>
        </div>
        </div>
    </div>
  );
}
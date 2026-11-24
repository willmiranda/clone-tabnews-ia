export default function Home() {
  const names = ["William", "Denise", "Henrique", "Cecília"];

  return (
    <main className="container">
      <div className="card">
        <h1>Lista de Nomes</h1>
        <ul className="name-list">
          {names.map((name) => (
            <li key={name} className="name-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

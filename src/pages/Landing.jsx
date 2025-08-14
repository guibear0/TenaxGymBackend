import { Link } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
       <h1 className="site-title poppins-regular">TENAX GYM</h1>
        <nav>
          <Link to="/login" className="btn-login">Iniciar Sesión</Link>
          <Link to="/register" className="btn-register">Registrarse</Link>
          <Link to="/test" className="btn-test">Test de Conexión</Link>
        </nav>
      </header>

      <main className="landing-main">
        <section className="intro">
          <h2>Tu espacio de entrenamiento personalizado</h2>
          <p>Registra tu progreso, accede a tus rutinas, y mejora cada día.</p>
        </section>

        <section className="features">
          <h3>¿Qué podrás hacer cuando ingreses?</h3>
          <div className="features-grid">
            <button className="feature-btn animate">🏋️ Ver ejercicios</button>
            <button className="feature-btn animate">📏 Registrar peso y medidas</button>
            <button className="feature-btn animate">📅 Ver calendario</button>
          </div>

          <p className="and-more">¡Y mucho más!</p>
          <blockquote className="motivation">
            “El esfuerzo total es una victoria completa.”<br />
            — Mahatma Gandhi
          </blockquote>
        </section>
      </main>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Gimnasio WebApp</p>
      </footer>
    </div>
  );
}

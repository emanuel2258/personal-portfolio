import { useRouteError } from "react-router-dom";
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <Menu />
        <main className="body">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. Looks like this page does not exist.</p>
    </main>
        <Footer />
    </>
);
}
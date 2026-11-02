import { Container, Button } from "../components/ui.jsx";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-4 text-slate-600">Page not found.</p>
      <Button to="/" className="mt-8">
        Back to home
      </Button>
    </Container>
  );
}

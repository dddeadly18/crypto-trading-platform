import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
export default function Home() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}

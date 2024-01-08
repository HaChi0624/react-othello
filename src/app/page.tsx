import Board from "./components/board/Board";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>オセロ</h1>
      <Board />
    </main>
  );
}

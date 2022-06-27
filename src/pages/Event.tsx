import { Header } from "../components/Header";
import { VideoPlayer } from "../components/VideoPlayer";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-row">
        {slug
          ? <VideoPlayer lessonSlug={slug} />
          : <div className="flex-1" />
        }
        <Sidebar />
      </main>
    </div>
  );
}

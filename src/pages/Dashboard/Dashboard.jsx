import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie seus posts</p>
      {posts && posts.length == 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Crie seu primeiro post
          </Link>
        </div>
      ) : (
        <>
          {" "}
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div className={styles.actions}>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-danger btn-outline"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;

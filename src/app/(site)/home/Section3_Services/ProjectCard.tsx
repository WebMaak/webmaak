import styles from "@/styles/services/ProjectCard.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  link: string;
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const optimizedImage = project.image.includes("cloudinary.com")
    ? project.image.replace("/upload/", "/upload/w_600,f_auto,q_auto/")
    : project.image;

  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <Image
          src={optimizedImage}
          alt={project.title}
          width={400}
          height={280}
          className={styles.image} // Assuming there might be a style for it
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <h3 className={styles.title}>
          <Link
            aria-label="View project"
            href={project.link}
            className={styles.title}
          >
            {project.title}
          </Link>
        </h3>

        <p className={styles.description}>{project.description}</p>

        <Link
          aria-label="View project"
          href={project.link}
          className={styles.arrow}
        >
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

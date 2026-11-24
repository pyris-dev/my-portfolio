import {
  useLayoutEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction
} from "react";
import { PROJECTS } from "../../data/projects";

/** A project whose details are displayed in a dialog. */
type PopupProject = Extract<(typeof PROJECTS)[number], { type: "popup" }>;

function GalleryControls({
  index,
  count,
  setIndex
}: {
  index: number;
  count: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) {
  if (count < 2) return null;

  return (
    <div className="project-dialog-gallery-controls">
      <button
        type="button"
        aria-label="Previous gallery image"
        aria-disabled={index === 0}
        onClick={() => setIndex((current) => Math.max(0, current - 1))}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m15 6-6 6 6 6" />
        </svg>
      </button>
      <span aria-live="polite">
        {index + 1} / {count}
      </span>
      <button
        type="button"
        aria-label="Next gallery image"
        aria-disabled={index === count - 1}
        onClick={() => setIndex((current) => Math.min(count - 1, current + 1))}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

function ProjectImageViewer({
  project,
  index,
  setIndex,
  onClose
}: {
  project: PopupProject;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  onClose: () => void;
}) {
  const viewerRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const viewer = viewerRef.current;
    if (viewer && !viewer.open) viewer.showModal();
  }, []);

  return (
    <dialog
      className="project-image-viewer"
      ref={viewerRef}
      aria-labelledby="project-image-viewer-title"
      onClose={(event) => {
        event.stopPropagation();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          event.currentTarget.close();
        } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          event.stopPropagation();
          const direction = event.key === "ArrowLeft" ? -1 : 1;
          setIndex((current) =>
            Math.max(
              0,
              Math.min(project.gallery.length - 1, current + direction)
            )
          );
        }
      }}
    >
      <div className="project-image-viewer-header">
        <h2 id="project-image-viewer-title">{project.title} gallery</h2>
        <button
          type="button"
          className="project-dialog-close"
          aria-label="Close image viewer"
          onClick={() => viewerRef.current?.close()}
          autoFocus
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div
        className="project-image-viewer-stage"
        onClick={(event) => {
          if (event.target === event.currentTarget) viewerRef.current?.close();
        }}
      >
        <img
          src={project.gallery[index].imageUrl}
          alt={`${project.title} gallery image ${index + 1}`}
        />
      </div>
      <GalleryControls
        index={index}
        count={project.gallery.length}
        setIndex={setIndex}
      />
    </dialog>
  );
}

/** Displays the details of a popup project. */
export function ProjectDialog({
  project,
  onClose
}: {
  project: PopupProject;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.target === event.currentTarget &&
          (event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom)
        )
          event.currentTarget.close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.currentTarget.close();
        }
      }}
      onTouchStart={(event) => event.stopPropagation()}
      onTouchEnd={(event) => event.stopPropagation()}
      onPointerDown={(event) => event.stopPropagation()}
      onPointerUp={(event) => event.stopPropagation()}
      onWheel={(event) => event.stopPropagation()}
    >
      <div className="project-dialog-header">
        <span>Project details</span>
        <button
          type="button"
          className="project-dialog-close"
          aria-label="Close project details"
          onClick={() => dialogRef.current?.close()}
          autoFocus
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div className="project-dialog-layout">
        <section className="project-dialog-section project-dialog-about">
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="project-dialog-description">{project.description}</p>
          {project.buttons.length > 0 && (
            <div className="project-dialog-links">
              {project.buttons.map((button, index) => (
                <a
                  className="project-dialog-link"
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {button.text}
                </a>
              ))}
            </div>
          )}
        </section>
        <div className="project-dialog-details">
          {project.gallery.length > 0 && (
            <section className="project-dialog-section">
              <div className="project-dialog-gallery-header">
                <h3>Project gallery</h3>
                <GalleryControls
                  index={galleryIndex}
                  count={project.gallery.length}
                  setIndex={setGalleryIndex}
                />
              </div>
              <button
                type="button"
                className="project-dialog-gallery"
                aria-label={`View ${project.title} gallery image ${galleryIndex + 1} fullscreen`}
                onClick={() => setViewerOpen(true)}
              >
                <img
                  src={project.gallery[galleryIndex].imageUrl}
                  alt={`${project.title} gallery image ${galleryIndex + 1}`}
                  style={{ objectFit: project.gallery[galleryIndex].objectFit }}
                />
              </button>
            </section>
          )}
          <section className="project-dialog-section project-dialog-meta">
            <div>
              <h3>Role</h3>
              <p>{project.role}</p>
            </div>
            {project.tags.length > 0 && (
              <div>
                <h3>Tags</h3>
                <div className="project-dialog-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag-pill" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
      {viewerOpen && (
        <ProjectImageViewer
          project={project}
          index={galleryIndex}
          setIndex={setGalleryIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </dialog>
  );
}

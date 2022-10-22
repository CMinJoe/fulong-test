export default function TemplateHome({ page, site }) {
  const { pageHeading } = page || {};

  return (
    <>
      <div className="page-content template-home">
        <div className="context">
          <h1>View Source Home - Vercel Test Site</h1>
          <p>{pageHeading}</p>
          <h2>
            <a href="https://fulong-test.vercel.app/studio/desk/pages;homePage">
              Sanity後台
            </a>
          </h2>
        </div>
      </div>
      <style jsx>{`
        .template-home {
          text-align: center;
        }
        .context {
          margin: var(--s-section) 0 0;
        }
      `}</style>
    </>
  );
}

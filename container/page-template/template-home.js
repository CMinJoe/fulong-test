export default function TemplateHome({ page, site }) {
  const { pageHeading } = page || {};

  return (
    <>
      <div className="template-home holding-page">
        <div className="context">
          <h1>OUR WEBSITE IS CURRENTLY UNDER CONSTRUCTION</h1>
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

        .holding-page{
          position: fixed;
          color: var(--cr-black);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .context {
          color: #FFFFFF;
          h1{
            font-family: 'G0';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 34px;
            text-transform: uppercase;
          }

          h2{
            margin-top:15px;
            font-family: 'G0';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 34px;
          }
          
        }
      `}</style>
    </>
  );
}

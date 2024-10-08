const Footer = () => {
    return (
        <div className="mt-10 py-16 flex justify-center">
        <div className="text-center">
          <h3 className="text-3xl mb-5">Connect with me</h3>
          <div className="justify-center flex space-x-5">
            <a
              href="https://github.com/okto16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://oktorino.vercel.app/images/Frame-4.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/oktorino-bagas-aji-sudarno-177161292/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img src="https://oktorino.vercel.app/images/Frame-1.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/oktorino-bagas-aji-sudarno-177161292/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img src="https://oktorino.vercel.app/images/Frame.svg" className="w-6" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Footer
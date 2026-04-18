import React from "react";
import styles from "./Hero.module.css";
import profileImg from "../../assets/KhaledJallouliImg.jpg";
import resumeEnPDF from "../../assets/Khaled_Jallouli_Resume_Final_eng.pdf";
import resumeFrPDF from "../../assets/Khaled_Jallouli_CV_Francais.pdf";
import TechMarquee from "../../components/TechMarquee/TechMarquee";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.mainContent}>
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div
            className={`col-md-6 d-flex justify-content-center mb-4 mb-md-0 ${styles.imageContainer}`}
          >
            <img
              src={profileImg}
              className={styles.profileImg}
              alt="A professional photo of Khaled Jallouli"
            />
            <div className={styles.statusBubble}>
              <div className={styles.statusDot}></div>
              <span>Open to new opportunities</span>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className={styles.title}>
              <span className={styles.wordFull}>Full</span>
              <span className={styles.wordStack}>Stack</span>
              <span className={styles.wordDeveloper}>Developer</span>
            </h1>
            <p className={styles.description}>
              I craft seamless and dynamic digital experiences from front-end to
              back-end. My passion lies in solving complex problems and building
              elegant, high-performance web and mobile applications.
            </p>

            <div className={styles.buttonContainer}>
              {/* Updated Resume Button with Dropdown */}
              <div className={styles.dropdownContainer} ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={styles.btn}
                >
                  Download Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chevron-down ms-2 ${styles.chevron} ${isDropdownOpen ? styles.rotate : ""}`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>

                <div
                  className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.show : ""}`}
                >
                  <a
                    href={resumeEnPDF}
                    download="Khaled_Jallouli_Resume_EN.pdf"
                    className={styles.dropdownItem}
                  >
                    English (EN)
                  </a>
                  <a
                    href={resumeFrPDF}
                    download="Khaled_Jallouli_Resume_FR.pdf"
                    className={styles.dropdownItem}
                  >
                    Français (FR)
                  </a>
                </div>
              </div>
              <a href="#contact" className={styles.btn}>
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-arrow-up-fill ms-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.708 0L12 10.793l-.146-.147a.5.5 0 0 0-.708.708l.5.5a.5.5 0 0 0 .708 0l.5-.5a.5.5 0 0 0 0-.708M12 8a.5.5 0 0 0-1 0v3.5a.5.5 0 0 0 1 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <TechMarquee />
    </section>
  );
};

export default Hero;

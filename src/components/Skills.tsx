// import React from 'react';

interface Props {}

const Skills = (_props: Props) => {
  return (
    <>
      <section id="skills" className="hero bg-gradient-to-b from-blue-900 via-cyan-600 to-blue-900">
        <div className="hero-body">
          <div className="columns is-justify-content-center">
            <div className="column is-10">
              <h1 className="title is-2 has-text-black"
                style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '70px',
                  lineHeight: '1.3',
                  color: '#0a0a0a'
                }}
                >Skills
              </h1>

              <div className="columns is-multiline">
                {/* Aquí empieza la modificación para agregar los círculos */}
                <div className="column is-2">
                  <a
                    href="https://www.arduino.cc/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(128, 128, 128, 0.5)', // Fondo gris opaco
                      borderRadius: '50%', // Hacer que sea circular
                      width: '150px', // Tamaño del círculo
                      height: '150px'
                    }}
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
                      alt="arduino"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                {/* Repetir el mismo estilo para cada skill */}
                <div className="column is-2">
                  <a
                    href="https://www.gnu.org/software/bash/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(128, 128, 128, 0.5)',
                      borderRadius: '50%',
                      width: '150px',
                      height: '150px'
                    }}
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
                      alt="bash"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://bulma.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(128, 128, 128, 0.5)',
                      borderRadius: '50%',
                      width: '150px',
                      height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg"
                      alt="bulma"
                      width="80"
                      height="80"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.cprogramming.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                      alt="c"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.w3schools.com/cpp/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                      alt="cplusplus"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.w3schools.com/cs/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                      alt="csharp"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://expressjs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                      alt="express"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                      alt="figma"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                      alt="git"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.adobe.com/in/products/illustrator.html"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
                      alt="illustrator"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.mathworks.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                      alt="matlab"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                      alt="mysql"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                      alt="nextjs"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.photoshop.com/en"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                      alt="photoshop"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.postgresql.org"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="postgresql"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://postman.com"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                      alt="postman"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.python.org"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                      alt="python"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                      alt="react"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://reactnative.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://reactnative.dev/img/header_logo.svg"
                      alt="reactnative"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="tailwind"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                      alt="typescript"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://unrealengine.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg"
                      alt="unreal"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>

                <div className="column is-2">
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="skill-item"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px'
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
                      alt="vuejs"
                      width="100"
                      height="100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

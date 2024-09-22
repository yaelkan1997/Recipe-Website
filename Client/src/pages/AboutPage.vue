<template>
  <div class="about-page">
      <div class="box">
          <div class="about-section">
              <h1 class="about-title">About Me</h1>
              <div class="about-description">
                  <p>
                      My name is Yael Kanevsky, and I am a graduate in Software Engineering and Information Systems.
                      This website was built as part of a Full Stack development course that I completed during my final semester.
                  </p>
                  <p>
                      The site integrates the Spoonacular API, enabling users to access a wide variety of recipes and customize their search according to dietary preferences and restrictions.
                  </p>
                  <p>
                      My goal with this project is to make cooking more accessible and enjoyable for everyone, regardless of experience. 
                      Whether you're just starting out or a seasoned cook, I hope you find inspiration and excitement in the culinary world through this platform.
                  </p>
              </div>
          </div>
          <div class="developers-section">
              <h2 class="developers-title">About the Developer</h2>
              <div class="developer">
                  <div class="developer-image">
                      <img
                          src="https://media.licdn.com/dms/image/v2/D4D03AQFY5_qbNd174w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714631082734?e=1731542400&v=beta&t=oTiEGN52Lg5_LwC8ogA5fMQAaOCf5NRht0CavnVzIME"
                          alt="Yael Kanevsky"
                      />
                  </div>
                  <div class="developer-info">
                      <h3 class="developer-name">Yael Kanevsky</h3>
                      <p class="developer-description">
                          I hold a degree in Software Engineering and Information Systems from Ben-Gurion University of the Negev. 
                          My passion lies in blending technology with creativity to build user-friendly, impactful applications.
                      </p>
                      <p class="developer-description">
                          This website is the culmination of my journey in Full Stack development, where I aimed to combine my love for cooking with my technical skills to create something that brings value to users.
                      </p>
                      <p class="developer-description">
                          I believe in continuous learning and improving my skills, and this project is just the beginning of what I plan to achieve in the tech world.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  .about-page {
    display: flex;
    justify-content: center;
    padding-top: 2em;
  }
  
  .box {
    border: 1px solid #cd5c5c; 
    border-radius: 8px;
    padding: 2rem;
    background: linear-gradient(
    to right,
        rgba(205, 92, 92, 0.1), 
        rgba(205, 92, 92, 0.3), 
        rgba(205, 92, 92, 0.5)  
  );
    border-radius: 10px;
    width: 70%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 2rem;
  }
  
  .about-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .about-description {
    line-height: 1.5;
    font-size: 1.3rem;
    width: 70%;
  }
  
  .developers-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .developer {
    display: flex;
    align-items: center;
    padding: 1em;
    margin-bottom: 1rem;
  }
  
  
  .developer-image img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%; 
  
  }
  
  .developer-info {
    flex-grow: 1;
  }
  
  .developer-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    padding-left: 1em;
  }
  
  .developer-description {
    line-height: 1.5;
    padding-left: 1em;
    font-size: 1.3rem;
  }
  

  a:link {
    color: rgb(36, 49, 36);
    background-color: transparent;
    text-decoration: none;
  }
  
  a:visited {
    color: rgb(8, 75, 19);
    background-color: transparent;
    text-decoration: none;
  }
  
  a:hover {
    color: rgb(65, 57, 57);
    background-color: transparent;
    text-decoration: underline;
  }
  </style>
<script>
	import me from '$lib/images/me1.jpg';
</script>
<svelte:head>
	<title>About Me</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<meta name="description" content="My Personal Website" />
</svelte:head>

<section>
	<div class="row">
		<div class="side">
	<img class="img-avatar" src={me} alt="Avatar"/>
	<h1 style="text-align: center;">Made Oka Resia Wedamerta</h1>
	<p style="text-align: center;">Innopolis University Student</p>
	<div class="icon-bar">
		<a id ="tg-link" href="https://t.me/okaresia"><i class="fa fa-telegram"></i></a>
		<a id ="email" href="mailto:m.wedamerta@innopolis.university"><i class="fa fa-envelope"></i></a>
		<a id ="gh-link" href="https://github.com/UP3M/Sveltekit-Web"><i class="fa fa-github"></i></a>
	</div>
</div>
<div class="main">
      <h2>About Me</h2>
      <h3>PERSONAL & PROFESSIONAL SKILLS</h3>
      <p>I am communicative, broad-minded, hardworking, problem-solving, responsible person, self-management,
          commercial awareness, commitment and enthusiasm, IT skills</p>
      <p>I am very interested in starting a career in Information and Technology. Usually, I use my free time 
          to work on research on Machine Learning project. I have experience working as an Ionic application programmer for six months and make money from it. 
          My other habit besides learning new things about IT and digital technology is learning other languages besides Indonesian, for example, English and 
          Chinese. My interest is to develop a new idea project in Machine Learning so that it will be useful for dealing with problems in the community, especially in terms 
          of labor efficiency, costs, and geographical conditions. Besides, I usually play basketball or playing 
          a musical instrument such as a guitar to rest my mind.
          </p>
      <h3>PROGRAMMING SKILLS</h3>
      <p> Python, Java, C++, C#, HTML, and TypeScript, HTML, CSS, JavaScript</p>
      <h3>LANGUAGE SKILLS</h3>
      <p>Intermediate English, Native Speaker of Bahasa Indonesia, Beginner Chinese</p>
	</div>
</div> 
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.row {  
  display: -ms-flexbox; /* IE10 */
  display: flex;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {   
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: white;
  padding: 20px;
}

	.img-avatar {
	  border-radius: 50%;
	  width: 100%;
	  padding: 20px;
	}
	
	.icon-bar {
	  width: 100%; /* Full-width */
	  background-color: #555; /* Dark-grey background */
	  overflow: auto; /* Overflow due to float */
	}
	
	.icon-bar a {
	  float: left; /* Float links side by side */
	  text-align: center; /* Center-align text */
	  width: 33%; /* Equal width (3 icons with 33% width each = 100%) */
	  padding: 20px 0; /* Some top and bottom padding */
	  transition: all 0.3s ease; /* Add transition for hover effects */
	  color: white; /* White text color */
	  font-size: 36px; /* Increased font size */
	}
	
	.icon-bar a:hover {
	  background-color: #000; /* Add a hover color */
	}
	
	* {box-sizing:border-box}
	
</style>

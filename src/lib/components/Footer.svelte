<script lang="ts">
	import { faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons';
  	import Icon from 'svelte-awesome';
 

</script>


<div class="fixed bottom-0 w-full flex justify-between items-center px-4 bg-slate-300">
    <p>Made by Paul Hardman. Powered by OpenAI.</p>
    <div class="flex gap">
        <a href="https://github.com/" target="_blank"><Icon data={faGithub} class="m-3" scale={2} /></a>
        <a href="https://www.linkedin.com/in/paul-hardman-1199b6108/" target='_blank'><Icon data={faLinkedin } class="m-3" scale={2} /></a>
    </div>
</div>
<script lang="ts">
  const didYouKnowFacts = [
    "In 2016, Mozart Sold More CDs than Beyoncé.",
    "The British Navy Uses Britney Spears Songs to Scare Off Pirates!",
    "The Offspring's First Drummer Left the Band to Become a Gynecologist.",
    "The world’s largest grand piano was built by a 15-year-old in New Zealand.",
    "A song that gets stuck in your head is called an 'earworm'.",
    "Beethoven could still hear music in his head after going deaf.",
    "The first-ever music video was created in 1894 for a song called 'The Little Lost Child'.",
    "The longest concert ever lasted for 453 hours and was performed by the band Soulflay.",
    "Eminem wrote 'Lose Yourself' during breaks while filming '8 Mile'.",
    "The most expensive musical instrument ever sold was a Stradivarius violin for $16 million.",
    "The Beatles used the word 'love' 613 times in their songs.",
    "Elvis Presley never performed outside of North America.",
    "Michael Jackson's 'Thriller' is the best-selling album of all time.",
    "The world’s first satellite to broadcast music was Soviet Union’s Sputnik 1.",
    "Freddie Mercury created the name 'Queen' for his band.",
    "The first country in the world to grant a radio license was Luxembourg.",
    "The longest time spent in space by a professional musician is 197 days by Chris Hadfield.",
    "The national anthem of Greece has 158 verses.",
    "Bob Dylan’s real name is Robert Zimmerman.",
    "The world record for the most people singing the same national anthem simultaneously is 254,537 for Bangladesh.",
    "Leonard Cohen was originally a poet and novelist before releasing his first album at the age of 33.",
    "The longest marathon drumming by an individual is 134 hours and was set by Carlos Santos from Portugal.",
    "Adele’s '21' is the longest-running number one album by a female solo artist in the history of the UK and US.",
    "The first jazz record was made by the Original Dixieland Jass Band in 1917.",
    "The harmonica is the world's best-selling music instrument.",
    "Wolfgang Amadeus Mozart composed his first piece of music at age 5.",
    "The first guitar was created in ancient Egypt.",
    "Frank Sinatra was arrested for adultery and seduction in 1938.",
    "The most covered song of all time is 'Yesterday' by The Beatles.",
    "The first-ever recorded song was 'Au Clair de la Lune' on a phonautograph in 1860.",
    "Jimi Hendrix’s real name was Johnny Allen Hendrix.",
    "The piano keys were originally black and the sharps and flats white. It was later changed to the current color scheme for better visibility.",
    "The largest orchestra ever consisted of 8,097 musicians in St. Petersburg, Russia.",
    "The first country song to sell a million copies was 'Sallie Gooden' by fiddler A.C. (Eck) Robertson in 1922.",
    "Ludwig Van Beethoven is believed to have been completely deaf by the time he composed his famous 9th Symphony.",
    "'Happy Birthday to You', one of the world's most sung songs, was originally written as 'Good Morning to All' by Patty and Mildred J. Hill.",
    "The longest music video is Michael Jackson’s 'Ghosts', with a runtime of 39 minutes and 31 seconds.",
    "Mariah Carey’s 'All I Want for Christmas Is You' holds the record for the most streamed song on Spotify in 24 hours.",
    "The first rap song to hit number one on the Billboard Hot 100 was 'Rapture' by Blondie in 1981.",
    "The most expensive concert ticket ever sold was for a charity auction to see The Rolling Stones, fetching $2.7 million.",
    "The oldest musical composition discovered is 'Hurrian Hymn No. 6', written in cuneiform, dating to approximately 1400 BC.",
    "The guitar riff from 'Smoke on the Water' by Deep Purple is often considered one of the most recognizable riffs in rock music history.",
    "The highest note ever sung by a male in a recorded song is a G10, achieved by Adam Lopez in 2008.",
    "The Beatles were turned down by Decca Records, who said 'guitar groups are on the way out'.",
    "The most expensive album production ever was Michael Jackson’s 'Invincible', costing approximately $30 million.",
    "Vinyl records have grooves on both sides, and the average LP has about 1,500 feet of grooves.",
    "The first Grammy Awards ceremony was held in 1959.",
    "Madonna holds the record for the most Billboard Hot 100 top ten singles by a female artist.",
    "The longest guitar solo in a studio album is 'Free Bird' by Lynyrd Skynyrd, lasting around 4 minutes and 55 seconds.",
    "Mozart and Beethoven never met in person, despite being alive at the same time and both living in Vienna for a period."
    
]
  const randomFact =
    didYouKnowFacts[Math.floor(Math.random() * didYouKnowFacts.length)];
</script>

<div
  class="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-900 opacity-75"
>
  <div
    class="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"
  />
  <h2 class="text-center text-xl font-semibold text-white">Did you know?</h2>
  <p class="text-center text-white">
    {randomFact}
  </p>
</div>

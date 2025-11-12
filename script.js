// Ensure the script runs only after the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TARGETING THE BOOT BOX ---
    const bootBox = document.querySelector('.boot-box');
    
    // Only run the animation if the boot-box element exists
    if (bootBox) {
        // Save the full, final message HTML content
        const finalContent = bootBox.innerHTML;
        
        // Start by showing only the first line
        bootBox.innerHTML = '> SYSTEM BOOTING...'; 
        
        let step = 0;
        const totalSteps = 4;
        
        // Define the interval for the animation steps
        const bootSequence = setInterval(() => {
            
            if (step === 0) {
                // Step 1: Append the welcome message
                bootBox.innerHTML += '<br>> WELCOME TO Christian\'s TUTORING HUB.';
            } else if (step === 1) {
                // Step 2: Append the connecting message
                bootBox.innerHTML += '<br>> CONNECTING...';
            } else if (step === 2) {
                // Step 3: Append the successful connection message
                bootBox.innerHTML += ' <span class="success">SUCCESS</span>';
            } else if (step === 3) {
                // Step 4: Load the final content lines (Lessons & Boredom solved)
                // Note: We use the stored finalContent variable to quickly dump the rest of the text
                bootBox.innerHTML = finalContent;
            } else if (step === totalSteps) {
                // Step 5: Stop the animation loop
                clearInterval(bootSequence);
                
                // Optional: Add a subtle flash animation (requires a small addition to style.css)
                // This makes the text look like it's humming
                bootBox.style.animation = 'flash 1.5s infinite alternate';
                
                // Optional: Enable the buttons after the boot sequence completes
                document.querySelectorAll('.btn').forEach(btn => {
                    btn.disabled = false;
                });
            }
            step++;
        }, 600); // 600ms pause between each line/step

        // Optional: Add this small CSS keyframe animation to style.css
        /* @keyframes flash {
            from { text-shadow: none; }
            to { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffaa00; }
        }
        */
    }

    // --- 2. QUIZ/GAME FUNCTIONALITY SETUP (Future Use) ---
    // If you plan to add a button to start a quiz or a game directly from the homepage, 
    // you would add its listener here.
    
});

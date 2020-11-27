// window.addEventListener("beforeinstallprompt", function (e) {
//     e.preventDefault();
//     ref.current.addEventListener("click", () => {
//       e.prompt();
//       e.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === "accepted") {
//           console.log("Użytkownik zainstalował aplikacje");
//         }
//         e = null;
//       });
//     });
//   });
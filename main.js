
import axios from 'axios';

const {
    createApp
} = Vue

createApp({
    data() {
        return {
            indiceChat : 0,
            newMsg: "",
            visibility : "hidden",
            search: '',
            showArrow: false,
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/micheleScotti.png',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            delOpt: false,
                        }
                    ]
                },
                {
                    name: 'Fabio',
                    avatar: 'img/fabio.webp',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            delOpt: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            delOpt: false,
                        }
                    ]
                },
                {
                    name: 'Samuele',
                    avatar: 'img/samuele.jpg',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            delOpt: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            delOpt: false,
                        }
                    ]
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/alessandroB.jpg',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            delOpt: false,
                        }
                    ]
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/alessandroL.jpg',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            delOpt: false,
                        }
                    ]
                },
                {
                    name: 'Claudia',
                    avatar: 'img/claudia.jpg',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            delOpt: false,
                        }
                    ]
                },
                {
                    name: 'Federico',
                    avatar: 'img/federico.jpg',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            delOpt: false,
                        }
                    ]
                },
                {
                    name: 'Davide',
                    avatar: 'img/davide.jpg',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            delOpt: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            delOpt: false,
                        }
                    ]
                }
            ]
        }
    },

    methods: {

        clicked(index) {
            this.indiceChat = index;
            console.log(this.indiceChat);
            this.visibility = "visible";
            this.contacts[index].clicked = true;
            this.contacts[index].miaClasse = "bkColor-low-grey";
            i = 0;
            while(i < this.contacts.length) {
                if (index != i) {
                    this.contacts[i].miaClasse = "bk-white";
                    this.contacts[i].clicked = false;
                }
                i++;
            }
        },

        hover(index) {
            if (this.contacts[index].clicked == false) {
                this.contacts[index].miaClasse = "bkColor-low-low-grey";
            }
            i = 0;
            while (i < this.contacts.length) {
                if (i != index && this.contacts[i].clicked == false && !this.contacts[i].miaClasse.includes("none")) {
                    this.contacts[i].miaClasse = "bk-white";
                }
                i++;
            }
        },

        backToNormal(index) {
            if (this.contacts[index].clicked == false) {
                this.contacts[index].miaClasse = "bk-white";
            } 
        },

        addMsg() {
            let today = new Date();
            let day = today.getDate();
            if (today.getMonth() + 1 < 10) {
                exMonth = today.getMonth() + 1;
                month = "0" + exMonth;
            } 
            else {
                month = today.getMonth() + 1;
            }
            let year = today.getFullYear();
            let formattedDate = `${day}/${month}/${year}`;

            // Ottenere l'ora corrente in formato hh:mm:ss
            let hours = today.getHours();
            let minutes = today.getMinutes();
            let seconds = today.getSeconds();
            let formattedTime = `${hours}:${minutes}:${seconds}`;

            let totalDate = formattedDate + " " + formattedTime;
            if (this.newMsg !== "") {
                this.contacts[this.indiceChat].messages.push({
                    date: totalDate,
                    message: this.newMsg,
                    status: 'sent'
                });
                this.response();
            }
        },
        response() {
            let currentChat = this.contacts[this.indiceChat].messages;
            let mex = this.newMsg.toLowerCase();
            let subMex = this.newMsg.slice(0, -1);
            let subMexLow = subMex.toLowerCase();
            let greetings = ["ciao", "buongiorno", "salve", "buonasera", "buon pomeriggio", "ehilà", "ehi", "ehy", "hey", "hei", "buondì"];
            let nameAsking = [
                "come ti chiami", 
                "qual è il tuo nome",
                "potresti dirmi il tuo nome",
                "scusa mi dici come ti chiami",
                "vorrei sapere il tuo nome, per favore",
                "puoi presentarti dicendo il tuo nome",
                "mi dici il tuo nome, per favore",
                "come posso chiamarti",
                "posso sapere il tuo nome",
                "saresti così gentile da dirmi come ti chiami",
            ];
            let today = new Date();
            let day = today.getDate();
            if (today.getMonth() + 1 < 10) {
                exMonth = today.getMonth() + 1;
                month = "0" + exMonth;
            } 
            else {
                month = today.getMonth() + 1;
            }
            let year = today.getFullYear();
            let formattedDate = `${day}/${month}/${year}`;

            // Ottenere l'ora corrente in formato hh:mm:ss
            let hours = today.getHours();
            let minutes = today.getMinutes();
            let seconds = today.getSeconds();
            let formattedTime = `${hours}:${minutes}:${seconds}`;

            let totalDate = formattedDate + " " + formattedTime;

            if (greetings.includes(mex) || greetings.includes(subMexLow)) {
                function greeting() {
                    currentChat.push({
                        date: totalDate,
                        message: "Ciao, come stai?",
                        status: 'received'
                    });
                }
                setTimeout(greeting, 700);
            }
            else if (nameAsking.includes(mex) || nameAsking.includes(subMexLow)) {
                let nameAns = this.contacts[this.indiceChat].name;
                if (nameAns.includes(" ")) {
                    nameAns = nameAns.split(" ")[0];
                }
                function name() {
                    currentChat.push({
                        date: totalDate,
                        message: "Mi chiamo " + nameAns + "!",
                        status: 'received'
                    });
                }
                setTimeout(name, 700);
            }
            else {
                function bad() {
                    currentChat.push({
                        date: totalDate,
                        message: "Non sono così intelligente da poter capire.",
                        status: 'received'
                    });
                }
                setTimeout(bad, 1000);
            }
            console.log(this.indiceChat);
            this.newMsg = "";
        },
        updateScroll() {
            let element = document.getElementById("chat-view");
            element.scrollTop = element.scrollHeight;
        },
        cercaChat() {
            for (let i = 0; i < this.contacts.length; i++) {
                this.contacts[i].miaClasse = "bk-white";
                if (!this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())) {
                    this.contacts[i].miaClasse = "bk-white none";
                }
            } 
        },
        focusSearchInput() {
            this.$refs.searchInput.focus();
        },
        changeDelOpt(i) {
            let message = this.contacts[this.indiceChat].messages[i]; 
            message.delOpt = true;
        },
        delMsg(i) {
            console.log(this.contacts[this.indiceChat].messages);
            let messages = this.contacts[this.indiceChat].messages;
            messages.splice(i, 1);
            console.log(this.contacts[this.indiceChat].messages);
        }
    },
    updated() {
        this.updateScroll();
      }
}).mount("#chats")

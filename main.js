
const {
    createApp
} = Vue

createApp({
    data() {
        return {
            indiceChat : 0,
            /* clickedName : "",
            clickedImg : "",
            clickedTime : "",
            currentMessages: [], */
            visibility : "hidden",
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/michele.jpg',
                    visible: true,
                    miaClasse: "bk-white",
                    clicked: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
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
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ]
                }
            ]
        }
    },

    methods: {

        clicked(index) {
            /* this.clickedName = this.contacts[index].name;
            this.clickedImg = this.contacts[index].avatar;
            this.clickedTime = this.contacts[index].messages.slice(-1)[0].date.substr(0, 16);
            this.currentMessages = this.contacts[index].messages; */
            this.indiceChat = index,
            this.visibility = "visible"
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
                if (i != index && this.contacts[i].clicked == false) {
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
            this.contacts[this.indiceChat].messages.push({
                date: '30/03/2020 18:51:00',
                message: this.newMsg,
                status: 'sent'
            })
            this.newMsg = "";
        },
    }
}).mount("#chats")
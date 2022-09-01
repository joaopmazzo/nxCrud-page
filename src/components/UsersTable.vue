<template>
  <div class="table">
    <div>
      <div class="table__title">
        <span>User's </span>
        <button>Add user</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Document</th>
            <th>E-mail</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody class="table__content">
          <tr v-for="(user, index) in users" v-bind:key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.document }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.city }}</td>
            <td>{{ user.state }}</td>
          </tr>
        </tbody>
      </table>
      <div class="table__footer">
        <button>Add user</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllUsers } from "../services/UserService";

export default {
  name: "UsersTable",
  data() {
    return {
      users: [
        {
          name: "Anselma Batistelli",
          document: "2300649292",
          email: "abatistelli0@ox.ac.uk",
          city: "Sirindhorn",
        },
        {
          name: "Kristel Arnoll",
          document: "3905851865",
          email: "karnoll1@lulu.com",
          city: "Hat Yai",
        },
        {
          name: "Suzie Limmer",
          document: "2935875737",
          email: "slimmer2@nationalgeographic.com",
          city: "Ōami",
        },
        {
          name: "Korella Avon",
          document: "8313399597",
          email: "kavon3@canalblog.com",
          city: "Ningxin",
        },
        {
          name: "Annissa Pugh",
          document: "6159931849",
          email: "apugh4@comsenz.com",
          city: "Phultala",
        },
        {
          name: "Zechariah von Nassau",
          document: "7342256722",
          email: "zvon5@reference.com",
          city: "Côn Sơn",
        },
        {
          name: "Levin Forlong",
          document: "3056307228",
          email: "lforlong6@buzzfeed.com",
          city: "Siverskiy",
        },
        {
          name: "Tansy Karby",
          document: "3602771156",
          email: "tkarby7@drupal.org",
          city: "Hŭkkyo-ri",
        },
        {
          name: "Sheeree Georgi",
          document: "0505251965",
          email: "sgeorgi8@comsenz.com",
          city: "Lanos",
        },
        {
          name: "Brigham Tembridge",
          document: "2470173183",
          email: "btembridge9@flickr.com",
          city: "Huangge",
        },
        {
          name: "Alene Padden",
          document: "8841035897",
          email: "apaddena@miitbeian.gov.cn",
          city: "Princeville",
          state: "Québec",
        },
        {
          name: "Aila Wermerling",
          document: "1131159802",
          email: "awermerlingb@themeforest.net",
          city: "Colonia Aurora",
        },
        {
          name: "Florri Cardenas",
          document: "6246363601",
          email: "fcardenasc@businessinsider.com",
          city: "Karanglo",
        },
        {
          name: "Vinnie Auckland",
          document: "1734717637",
          email: "vaucklandd@mayoclinic.com",
          city: "Pancas",
        },
        {
          name: "Bernie Roderham",
          document: "6798579078",
          email: "broderhame@time.com",
          city: "Baki",
        },
        {
          name: "Nikita Asquith",
          document: "7998675519",
          email: "nasquithf@hexun.com",
          city: "Macarse",
        },
        {
          name: "Anjela Willimont",
          document: "0580402479",
          email: "awillimontg@wisc.edu",
          city: "Nahrīn",
        },
        {
          name: "Melvin Oller",
          document: "8672641892",
          email: "mollerh@virginia.edu",
          city: "Sumenep",
        },
        {
          name: "Ronny Elmhurst",
          document: "6851685752",
          email: "relmhursti@ucoz.ru",
          city: "Rifu",
        },
        {
          name: "Calla Mingardo",
          document: "4353280554",
          email: "cmingardoj@examiner.com",
          city: "Motge",
        },
      ],
      numberOfUsers: 20,
    };
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      getAllUsers().then((response) => {
        console.log(response);
        this.users = response;
        this.numberOfUsers = response.length;
      });
    },
  },
};
</script>

<style scoped>
.table {
  height: calc(100vh - 6vh);
  width: 80vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.table__title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  background-color: hsla(0, 0%, 100%, 0.302);
  border-radius: 10px 10px 0 0;
}

.table__footer {
  padding: 15px;

  display: flex;
  justify-content: end;

  background-color: hsla(0, 0%, 100%, 0.302);
  border-radius: 0 0 10px 10px;
}

table {
  width: 100%;
  table-layout: fixed;
}
.table__header {
  background-color: hsla(0, 0%, 100%, 0.05);
}
.table__content {
  height: 600px;
  overflow: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
</style>

//app entry
import 'vuetifyCss';
import Vue from 'vue';
import Vuetify from 'vuetify';


Vue.use(Vuetify);

let app = new Vue({
	el: '#app',
	data: ()=>{
		return {
			appTitle: 'hahahahahah'
		}
	},
	template: `<div>
		hello, vue {{appTitle}}
		<v-alert warning value="true">
		This is a warning alert.
		</v-alert>
		<div>
              <v-btn primary dark>Normal</v-btn>
        </div>
		<v-alert error value="true">
		This is a error alert.
		</v-alert>
	</div>`
});
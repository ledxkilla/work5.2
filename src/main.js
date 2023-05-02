import { createApp } from 'vue'
//ui
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem,Search,Grid, GridItem,NoticeBar,Card    } from 'vant';

import router from './router'
import './style.css'
import App from './App.vue'

const app=createApp(App)
app.use(router)

//vant组件库
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Search);
app.use(Grid);
app.use(GridItem);
app.use(NoticeBar);
app.use(Card);

app.mount('#app')


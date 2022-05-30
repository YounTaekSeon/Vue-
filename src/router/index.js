import { createRouter, createWebHistory } from "vue-router";

// routes를 매핑하여 사용하기 위함
import RouteMapping from "./routes";

// 화면에 보여줄 \view 추가
import MainView from "@/views/MainView.vue";
import IndexView from "@/views/IndexView.vue";
import ContentsView from "@/views/ContentsView.vue";

// 매핑한 routes 가져와서 components 연결
const routes = [
  {
    path: RouteMapping.main,
    name: "main",
    component: MainView,
  },
  {
    path: RouteMapping.index,
    name: "index",
    component: IndexView,
  },
  {
    path: RouteMapping.contents,
    name: "contents",
    component: ContentsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

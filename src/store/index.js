import React from "react";
import { createStore } from "redux";

import { ReactComponent as InternetSharingIcon } from "../assets/internetSharing.svg";
import { ReactComponent as CartaoIcon } from "../assets/cartao.svg";
import { ReactComponent as GraficoIcon } from "../assets/grafico.svg";
import { ReactComponent as MalaIcon } from "../assets/mala.svg";
import { ReactComponent as PerfilIcon } from "../assets/perfil.svg";
import { ReactComponent as SetaIcon } from "../assets/seta.svg";
import { ReactComponent as VelocimetroIcon } from "../assets/velocimetro.svg";

import AntiFraude from "../components/Pages/AntiFraude/";
import NotWorking from "../components/Pages/NotWorking";

const INITIAL_STATE = {
  activeTab: {
    tabName: "dashboard",
    text: "Dashboard",
    path: <NotWorking />,
    icon: <VelocimetroIcon />
  },
  data: [
    {
      tabName: "dashboard",
      text: "Dashboard",
      path: <NotWorking />,
      icon: <VelocimetroIcon />
    },
    {
      tabName: "regates",
      text: "Regates",
      path: <NotWorking />,
      icon: <SetaIcon />
    },
    {
      tabName: "antiFraude",
      text: "Anti-Fraude",
      path: <AntiFraude />,
      icon: <MalaIcon />
    },
    {
      tabName: "vendas",
      text: "Vendas",
      path: <NotWorking />,
      icon: <CartaoIcon />
    },
    {
      tabName: "relatorios",
      text: "Relatórios",
      path: <NotWorking />,
      icon: <GraficoIcon />
    },
    {
      tabName: "perfil",
      text: "Perfil",
      path: <NotWorking />,
      icon: <PerfilIcon />
    },
    {
      tabName: "campanhas",
      text: "Campanhas",
      path: <NotWorking />,
      icon: <InternetSharingIcon />
    }
  ]
};

function items(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SELECT_ITEM":
      return { ...state, activeTab: { ...state.activeTab, ...action.tab } };
    default:
      return state;
  }
}

const store = createStore(items);

export default store;

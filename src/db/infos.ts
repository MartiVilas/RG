

import Valorant from '../assets/valorant-s25a1-riot-games-homepage-product-card-1920x1080.png'
import TFT from '../assets/tft-st1525-platform-riotbar-gamecard-1920x1080-v001-summoner.png'
import LOL from '../assets/lol-sn24-1920x1080-kv-final.jpg'
import LOR from '../assets/lor-set924-dp-riotbarapplicationswitcher-1920x1080.jpg'
import WR from '../assets/wr-2025-patch-5a-kv-1920x1080.png'
import TwoXKO from '../assets/rg-com-whoweare-2xko-productcard.jpg'


import NOT2 from '../assets/wmv25-textless-image-riotclient-251010-min.jpg'
import NOT1 from '../assets/dd-aram-textless-banner.jpg'
import NOT3 from '../assets/1920x1080-textles.jpg'
import LORSvg from '../assets/lor-icon.png'
import LOLSvg from '../assets/League_of_Legends_icon.svg'

export const GAMES = [
  { title: 'League of Legends', href: 'https://www.leagueoflegends.com/', img: LOL, tag: 'PC' },
  { title: 'VALORANT', href: 'https://playvalorant.com/', img: Valorant, tag: 'PC' },
  {
    title: 'Teamfight Tactics',
    href: 'https://teamfighttactics.leagueoflegends.com/',
    img: TFT,
    tag: 'PC + Móvil',
  },
  {
    title: 'Legends of Runeterra',
    href: 'https://playruneterra.com/',
    img: LOR,
    tag: 'PC + Móvil',
  },
  {
    title: 'League of Legends: Wild Rift',
    href: 'https://wildrift.leagueoflegends.com/',
    img: WR,
    tag: 'Móvil',
  },
  { title: '2XKO', href: 'https://2xko.riotgames.com/', img: TwoXKO, tag: 'PC' },
]


export const NEWS = [

  {
    title: 'Bocetos del desarrollo: ARAM',
    img: NOT1,
    logo: LOLSvg,
    url: '/home',
  },
  {
    title: 'Videoclip del himno del Mundial 2025',
    img: NOT2,
    logo: LOLSvg,
    url: '/home',
  },
  {
    title: 'Avance de la versión 6.3 - League of Legends: Wild Rift',
    img: NOT3,
    logo: LORSvg,
    url: '/home',
  },

]
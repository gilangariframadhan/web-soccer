import { schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:schedule[] = [
    {id:1,PlayingDate:new Date(2021,8.10),HomeTeam:'Arema',
    AwayTeam:'Persebaya',HomeScore:3,AwayScore:2,
    RefName:'Abo',notes:'Pertandingan Overtime'},
    {id:2,PlayingDate:new Date(2021,8.10),HomeTeam:'Evos',
    AwayTeam:'RRQ',HomeScore:2,AwayScore:1,
    RefName:'Abo',notes:'Pertandingan Terlalu Easy kirain VSAI'},
    {id:3,PlayingDate:new Date(2021,8.14),HomeTeam:'Real Madrid',
    AwayTeam:'Inter Milan',HomeScore:3,AwayScore:2,
    RefName:'Abo',notes:'Pertandingan Balas-Balasan'},
    {id:4,PlayingDate:new Date(2021,8.15),HomeTeam:'Machester United',
    AwayTeam:'Newcastle United',HomeScore:4,AwayScore:1,
    RefName:'Abo',notes:'Pertandingan Membantai'},
    {id:1,PlayingDate:new Date(2021,8.17),HomeTeam:'Madura United',
    AwayTeam:'Persebaya',HomeScore:5,AwayScore:2,
    RefName:'Paijo',notes:'Pertandingan Kartu merah'}
]

export const TEAMS:Team[] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'Persebaya',type:'Over 30'},
    {id:3,name:'Real Madrid',type:'Over 30'},
    {id:4,name:'Newcastle United',type:'Over 30'},
    {id:5,name:'Persebaya',type:'Over 30'},
    {id:6,name:'Inter Milan',type:'Over 30'}
]
import { Component } from 'react';
import styles from '../styles/layout.module.css';
import SkillCard from './components/SkillCard';
// @ts-ignore
import UnityImg from '../ressources/Unity.svg'
// @ts-ignore
import CSharpImg from '../ressources/C_sharp.svg'
// @ts-ignore
import CppImg from '../ressources/Cpp.svg'
// @ts-ignore
import CImg from '../ressources/C.svg'
// @ts-ignore
import CssImg from '../ressources/Css.svg'
// @ts-ignore
import dsMaxImg from '../ressources/3dsMax.svg'
// @ts-ignore
import SubstanceImg from '../ressources/cdnlogo.com_substance.svg'
// @ts-ignore
import GitImg from '../ressources/Git.svg'
// @ts-ignore
import HtmlImg from '../ressources/Html.svg'
// @ts-ignore
import JSImg from '../ressources/JavaScript.svg'
// @ts-ignore
import AffinityImg from '../ressources/Logo_AffinityDesigner.svg'
// @ts-ignore
import UnrealImg from '../ressources/Unreal_Engine_Logo.svg'
// @ts-ignore
import MongoDBImg from '../ressources/MongoDB.svg'
// @ts-ignore
import nextJsImg from '../ressources/nextjs.svg'
// @ts-ignore
import NodeJSImg from '../ressources/NodeJS.svg'
// @ts-ignore
import PhpImg from '../ressources/phplogo.svg'
// @ts-ignore
import ReactImg from '../ressources/react.svg'
// @ts-ignore
import RedisImg from '../ressources/redis.svg'
// @ts-ignore
import SqlImg from '../ressources/Sql.svg'
// @ts-ignore
import TypeScriptImg from '../ressources/TypeScript.svg'
// @ts-ignore
import VueImg from '../ressources/vuejs.svg'
// @ts-ignore
import XamppImg from '../ressources/xampp.svg'
// @ts-ignore
import INRImg from '../ressources/INR-logo-s.jpg'

import Image from 'next/image';
import Link from 'next/link';




class SkillsPage extends Component {
  render() {
    return (
      <div className={styles.SkillMain}>
        <h1>Mes compétences</h1>
        <div className={styles.skill}>
          <h2>Jeux vidéo / Logiciel</h2>
          <div className={styles.skilldiv}>
            <SkillCard
                img= {UnityImg}
                content={{
                    name: "Unity",
                }} />

                <SkillCard
                img= {UnrealImg}
                content={{
                    name: "Unreal Engine",
                }} />

                <SkillCard
                img= {CSharpImg}
                content={{
                    name: "C#",
                }} />

                <SkillCard
                img= {CppImg}
                content={{
                    name: "C++",
                }} />

                <SkillCard
                img= {CImg}
                content={{
                    name: "C",
                }} />
            </div>
        </div>
        <div className={styles.skill}>
          <h2>Web</h2>
            <div className={styles.skilldiv}>
                <SkillCard
                img= {HtmlImg}
                content={{
                    name: "HTML",
                }} />

                <SkillCard
                img= {CssImg}
                content={{
                    name: "CSS",
                }} />

                <SkillCard
                img= {JSImg}
                content={{
                    name: "JavaScript",
                }} />

                <SkillCard
                img= {TypeScriptImg}
                content={{
                    name: "TypeScript",
                }} />

                <SkillCard
                img= {ReactImg}
                content={{
                    name: "React",
                }} />

                <SkillCard
                img= {VueImg}
                content={{
                    name: "Vue",
                }} />

                <SkillCard
                img= {NodeJSImg}
                content={{
                    name: "NodeJS",
                }} />

                <SkillCard
                img= {PhpImg}
                content={{
                    name: "PHP",
                }} />

                <SkillCard
                img= {MongoDBImg}
                content={{
                    name: "MongoDB",
                }} />

                <SkillCard
                img= {SqlImg}
                content={{
                    name: "SQL",
                }} />

                <SkillCard
                img= {RedisImg}
                content={{
                    name: "Redis",
                }} />

                <SkillCard
                img= {XamppImg}
                content={{
                    name: "Xampp",
                }} />

                <SkillCard
                img= {GitImg}
                content={{
                    name: "Git",
                }} />

                <SkillCard
                img= {nextJsImg}
                content={{
                    name: "NextJS",
                }} />
            </div>
        </div>
        <div className={styles.skill}>
          <h2>3D</h2>
          <div className={styles.skilldiv}>
            <SkillCard
                img= {dsMaxImg}
                content={{
                    name: "3ds Max",
                }} />

                <SkillCard
                img= {AffinityImg}
                content={{
                    name: "Affinity Designer",
                }} />

                <SkillCard
                img= {SubstanceImg}
                content={{
                    name: "Substance Designer",
                }} />
            </div>
        </div>
        <div className={styles.skill}>
          <h2>Numérique responsable</h2>
          <div className={styles.skilldiv}>
          <div className={styles.skillSolo}>
            <Link href="/INR">
                <Image  src={INRImg} alt="Picture of the skill"  height={60} />
            </Link>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsPage;

import React, { useState, useEffect } from "react";
import words from "../../words";
import { motion } from "framer-motion";

export default function PolicyPage(){
    const [device,setDevice] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.privacypolicy.title;

        handleResize();
        window.addEventListener('resize', handleResize);
    }, [])

    function handleResize() {
        if (window.outerWidth <= 768) { setDevice("mb") } else { setDevice("pc") }
    }

    return(
        <motion.main
            className="main__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1}}
        >
            <div id="policy-page" className={device === "pc" ? "mt-nav mb-100 px-28vw" : "mt-nav mb-100 px-base"}>
                <div className="header text-align-ct">
                    <div className="title large py-m">{words.terms.privacypolicy.title}</div>
                </div>
                <p className="content mt-m">
                梅企画（以下「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下「本サービス」といいます。）におけるユーザーについての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。<br/><br/>

                <span className="bold">1.収集する利用者情報及び収集方法</span><br/>

                本ポリシーにおいて、「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーのスマートフォン、PC等の端末において、ユーザーまたはユーザーの端末に関連して生成または蓄積された情報であって、本ポリシーに基づき当社が収集するものを意味するものとします。本サービスにおいて当社が収集する利用者情報は、その収集方法に応じて、以下のようなものとなります。<br/>

                (1)ユーザーからご提供いただく情報<br/>

                ユーザーが本サービスを利用するために、ご提供いただく情報は以下のとおりです。<br/>

                ・氏名<br/>

                ・メールアドレス<br/>

                ・クレジットカード情報<br/>

                ・写真<br/>

                ・その他当社が定める入力フォームにユーザーが入力する情報<br/>

                (2)ユーザーが本サービスの利用において、他のサービスと連携を許可することにより、当該他のサービスからご提供いただく情報<br/>

                ユーザーが、本サービスを利用するにあたり、ソーシャルネットワークサービス等の外部サービスとの連携を許可した場合には、その許可の際にご同意いただいた内容に基づき、以下の情報を当該外部サービスから収集します。<br/>

                ・当該外部サービスでユーザーが利用するID<br/>

                ・その他当該外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報<br/>

                (3)ユーザーが本サービスを利用するにあたって、当社が収集する情報<br/>

                当社は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあります。これには以下の情報が含まれます。<br/>

                ・端末情報<br/>

                ・ログ情報<br/>

                ・Cookie及び匿名ID<br/>

                ・位置情報　<br/><br/>

                <span className="bold">2.利用目的</span><br/>

                2-1　利用者情報は、2-2に定めるとおり本サービスの提供のために利用されるほか、2-3に定めるとおり、その他の目的にも利用される場合があります。<br/>

                2-2　本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下のとおりです。<br/>

                (1)本サービスに関する登録の受付、本人確認、利用料金の計算等本サービスの提供、維持、保護及び改善のため<br/>

                (2)本サービスに関するご案内、お問い合せ等への対応のため<br/>

                (3)本サービスに関する当社の規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため<br/>

                (4)本サービスに関する規約等の変更などを通知するため<br/>

                (5)上記の利用目的に付随する利用目的のため<br/>

                2-3　上記2-2以外の利用目的は以下のとおりです。<br/>

                </p>
            </div>
        </motion.main>
    )
}



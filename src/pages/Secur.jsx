import { useState } from 'react';
import styles from '../styles/Secur.module.css';

const Secur = () => {
    const [open, setOpen] = useState(null);

    const toggleAccordion = (index) => {
        setOpen(open === index ? null : index); // Закрыть, если уже открыт
    };

    return (
        <section className={styles.economy}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>Проблема безопасности и приватности в ИТ</h1>
                    <p className={styles.paragraph}>
                        С развитием концепции Web 3.0 вопросы безопасности и приватности становятся ключевыми для пользователей и разработчиков. Децентрализованная природа Web 3.0 предполагает, что данные и приложения больше не зависят от централизованных серверов, что значительно снижает риски, связанные с утечками данных и взломами крупных корпораций. Однако такие изменения также приводят к новым вызовам в области кибербезопасности и защиты данных, требующим пересмотра традиционных подходов.
                    </p>
                    <p className={styles.paragraph}>
                        Безопасность в Web 3.0 предполагает защиту данных и транзакций в условиях децентрализованных систем. В Web 2.0 пользователи привыкли доверять свои данные централизованным платформам (например, социальным сетям или интернет-магазинам), что создавало концентрированные цели для хакеров и злоумышленников. В Web 3.0 данные распределены по различным узлам и сетям, однако это не исключает угроз безопасности. Становятся актуальными такие проблемы, как атаки на смарт-контракты, уязвимости блокчейн-протоколов, а также фишинговые атаки, нацеленные на похищение криптографических ключей.
                    </p>
                    <p className={styles.paragraph}>
                        Приватность в Web 3.0 выходит на новый уровень, поскольку пользователи стремятся к большему контролю над своими личными данными. В то время как Web 2.0 построен на использовании данных для создания персонализированной рекламы и услуг, Web 3.0 предлагает пользователям больше возможностей по защите своих данных и участию в сети анонимно. Однако, с другой стороны, децентрализация и прозрачность блокчейна иногда противоречат идеям полной приватности, поскольку транзакции в публичных блокчейнах могут быть отслежены.
                    </p>
                </div>
                <div className={styles.mediaBlock}>
                    <div className={styles.graphContainer}>
                        <iframe 
                            width="500" 
                            height="300" 
                            src="https://rutube.ru/play/embed/e33ac5c69a9c97908a037c82a21c56ce/" 
                            frameBorder="0" 
                            allow="clipboard-write; autoplay" 
                            webkitAllowFullScreen 
                            mozallowfullscreen 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGKYef2reSH74LfXT7UKljw9RCRd_dGhLvQ&s"
                            alt="безопасность в интернете"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.accordion}>
                <Accordion
                    index={0}
                    open={open}
                    toggleAccordion={toggleAccordion}
                    title="Текущее состояние отрасли безопасности и приватности"
                >
                    <p>
                        Отрасль кибербезопасности развивается в ответ на угрозы цифровизации, включая атаки на смарт-контракты и уязвимости протоколов.
                    </p>
                    На данный момент отрасль кибербезопасности развивается очень быстро в ответ на новые угрозы, связанные с цифровизацией и массовым переходом к использованию децентрализованных систем. Среди ключевых направлений в этой области можно выделить:
<br />•	Развитие криптографических технологий. Современные шифровальные методы, такие как асимметричная криптография и цифровые подписи, активно применяются для защиты транзакций и данных в Web 3.0. Эти технологии обеспечивают конфиденциальность и целостность информации.
<br />•	Механизмы управления идентичностью. В Web 3.0 развивается концепция самоидентификации (self-sovereign identity), которая позволяет пользователям самостоятельно управлять своими цифровыми удостоверениями и контролировать доступ к своим данным без участия третьих сторон. Этот подход устраняет необходимость в централизованных авторизационных системах и защищает пользователей от утечек персональных данных.
<br />•	Инструменты для обеспечения приватности. Для решения проблемы отслеживаемости транзакций в публичных блокчейнах разрабатываются такие технологии, как Zero-Knowledge Proof (доказательства с нулевым разглашением), которые позволяют верифицировать данные или транзакции, не раскрывая подробностей.
<br />•	Развитие децентрализованных решений по безопасности. Сети Web 3.0 внедряют такие подходы, как децентрализованные антивирусы и системы мониторинга угроз, которые распределяют задачи защиты данных по множеству узлов и уменьшают риски взлома.
                </Accordion>

                <Accordion
                    index={1}
                    open={open}
                    toggleAccordion={toggleAccordion}
                    title="Блокчейн и его роль в безопасности"
                >
                    <p>
                        Блокчейн является основной технологией, обеспечивающей безопасность в Web 3.0. Благодаря своей распределённой и неизменной природе, блокчейн гарантирует защиту транзакций и данных от фальсификаций и взломов. Каждая транзакция записывается в публичный реестр, который не может быть изменен без консенсуса всей сети, что делает возможные атаки чрезвычайно сложными и затратными.
Блокчейн также используется для управления смарт-контрактами — автоматизированными программами, которые выполняются на основе заранее заданных условий. Это снижает зависимость от посредников и уменьшает риск человеческих ошибок или мошенничества, что повышает безопасность сделок.
                    </p>
                </Accordion>

                <Accordion
                    index={2}
                    open={open}
                    toggleAccordion={toggleAccordion}
                    title="Zero-Knowledge Proofs (ZKP)"
                >
                    <p>
                        Zero-Knowledge Proofs (ZKP) Одной из наиболее перспективных технологий в контексте Web 3.0 является Zero-Knowledge Proofs. ZKP позволяет одной стороне доказать другой стороне, что она владеет определенной информацией, не раскрывая саму информацию. Это чрезвычайно важно для обеспечения приватности и безопасности в блокчейн-протоколах, где прозрачность может быть как преимуществом, так и уязвимостью.
Применение ZKP позволяет пользователям взаимодействовать в децентрализованных сетях, сохраняя полную конфиденциальность данных, что делает эту технологию идеальной для финансовых операций, управления идентичностью и конфиденциальных транзакций.
                    </p>
                </Accordion>

                <Accordion
                    index={3}
                    open={open}
                    toggleAccordion={toggleAccordion}
                    title="Децентрализованные системы управления идентичностью (SSI)"
                >
                    <p>
                        3.	Децентрализованные системы управления идентичностью (SSI) В Web 3.0 управление идентичностью меняется коренным образом. В традиционных системах (Web 2.0) пользователи полагаются на централизованные платформы для управления своими учетными записями и идентификацией, что создает высокие риски утечек данных и нарушения конфиденциальности.
SSI (Self-Sovereign Identity) предлагает децентрализованное управление идентичностью, где пользователь контролирует свои данные без участия третьих сторон. Это позволяет пользователям владеть своими личными данными и выбирать, каким образом и с кем они делятся этой информацией. SSI защищает пользователей от кражи личных данных и улучшает безопасность сетевых транзакций.
                    </p>
                </Accordion>

                <Accordion
                    index={4}
                    open={open}
                    toggleAccordion={toggleAccordion}
                    title="Квантовая криптография"
                >
                    <p>
                        Квантовая криптография Развитие квантовых компьютеров ставит под угрозу традиционные криптографические системы, такие как RSA и ECC, которые сегодня широко используются для защиты данных. Квантовая криптография — это новая ветвь безопасности, которая использует принципы квантовой механики для создания абсолютно защищённых каналов передачи данных.
Хотя квантовая криптография пока находится в стадии развития, она имеет потенциал для революции в области защиты данных, особенно в условиях угрозы, которую представляют квантовые компьютеры для классических криптографических систем.
                    </p>
                </Accordion>
            </div>

            <footer className={styles.footer}>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                >
                    Источник: https://medium.com/@itorojack/уязвимости-в-системе-безопасности-web-3-полное-руководство-по-защите-цифровых-активов-6ef0c4bec44f
                </a>
            </footer>
        </section>
    );
};

const Accordion = ({ index, open, toggleAccordion, title, children }) => (
    <div className={styles.accordionItem}>
        <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
        >
            <h3>{title}</h3>
            <span>{open === index ? '-' : '+'}</span>
        </div>
        {open === index && <div className={styles.accordionContent}>{children}</div>}
    </div>
);

export default Secur;


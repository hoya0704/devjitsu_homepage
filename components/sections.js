import React from 'react';
import './components.scss';

const Sections = ({ menus }) => {
    return (
        <>
            {menus.map(menu => {
                menu.key = `section-${menu.label}`;
                const { href, label } = menu;
                let innerContent;
                switch (label) {
                    case 'intro':
                        innerContent = <div className="inner">
                            <h1>인트로닷</h1>
                            <p>인트로를 쉐킷쉐킷</p>
                            <ul className="actions">
                                <li><a href={href} className="button scrolly">{label}</a></li>
                            </ul>
                        </div>
                        break;
                    case 'about':
                        innerContent = <section>
                            <a href="#" className="image">
                                <img src="images/bgimg1.jpg" alt="one" data-position="center center"/>
                            </a>
                            <div className="content">
                                <div className="inner">
                                    <h2>Dev-jitsu</h2>
                                    <p>Developer와 Jusitsu의 약자로 완성되었습니다.</p>
                                    <p>마라톤의 끈기와 주짓수의 치열함과 열정으로 기업이 원하는 시스템을 구축하고 관리하고 있습니다.</p>
                                    <p>20년 이상 다양한 SI프로젝트를 수행한 경력의 데브짓수 대표가 직접 기업을 찾아갑니다.</p>
                                    <p>데브짓수에게 포기란 없습니다.</p>
                                    <ul className="actions">
                                        <li><a href={href} className="button">{label}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        break;
                    case 'skills':
                        const skills = [
                            { 
                                skillName: 'Langguage',
                                contents: 'Java, C#, Visual Basic, php, asp , javascript, ajax, jQuery, node.js, react',
                                image: 'images/pic01.jpg',
                                dataPosition: 'center center',
                                linkPage: '#'
                            }, {
                                skillName: 'Framework',
                                contents: 'spring, .net, egov, nextjs',
                                image: 'images/pic02.jpg',
                                dataPosition: 'top center',
                                linkPage: '#'
                            }, {
                                skillName: 'Database',
                                contents: 'oracle, mssql, mysql, mariadb',
                                image: 'images/pic03.jpg',
                                dataPosition: '25% 25%',
                                linkPage: '#'
                            }, {
                                skillName: 'Tool',
                                contents: 'eclipse, sqldeveloper, MySQL Workbench, Ms SQL Server Management Studio, Visual Studio',
                                image: 'images/pic01.jpg',
                                dataPosition: 'center center',
                                linkPage: '#'
                            }
                        ]
                        innerContent = skills.map(({ skillName, contents, image, dataPosition, linkPage }, index) => (
                            <section key={index}>
                                <a href={linkPage} className="image"><img src={image} alt={skillName} data-position={dataPosition}/></a>
                                <div className="content">
                                    <div className="inner">
                                        <h2>{skillName}</h2>
                                        <p>{contents}</p>
                                        <ul className="actions">
                                            <li><a href={linkPage} className="button">Learn more</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        ));
                        break;
                    case 'process' : 
                        const process = [
                            {
                                contents: '전문적인 상담을 통해 최적의 방법을 제시합니다.',
                                image: 'images/p1.jpg'
                            }, {
                                contents: '요청사항 분석을 통해 최적의 수행 방안을 찾아 진행합니다.',
                                image: 'images/p2.jpg'
                            }, {
                                contents: '아무리 사소한 요청 사항도 크리에이티브한 방법을 적용하여 최선의 결과물을 도출합니다.',
                                image: 'images/p3.jpg'
                            }, {
                                contents: '신속함은 미덕입니다. 최대한 빠른 시간 안에 요청사항을 완료합니다.',
                                image: 'images/p4.jpg'
                            }
                        ]
                        innerContent = process.map(({ contents, image }, index) => (
                            <section key={index}>
                                <a href="#" className="image"><img src={image} alt="process" data-position="center center"/></a>
                                <div className="content">
                                    <div className="inner">
                                        <p>{contents}</p>
                                    </div>
                                </div>
                            </section>
                        ));
                        break;
                    case 'portfolio':
                        const portfolios = [
                            { title: '태권도진흥재단' },
                            { title: 'KT' },
                            { title: 'CBS' },
                            { title: '현대엔지니어링' },
                            { title: '대교CNS' },
                            { title: '전북생물산업진흥원' },
                            { title: 'ABC마트 코리아' },
                            { title: '중부대학교' },
                            { title: '대교' },
                            { title: '까사미아' },
                            { title: '키다리식품' },
                            { title: '대구 엑스포' },
                            { title: '철도공사' },
                            { title: '전남문화관광재단' },
                            { title: '아이덴티티게임즈' },
                            { title: '해양생물자원관' },
                            { title: '현대오일뱅크' },
                            { title: '유진초저온' },
                            { title: '㈜유창' },
                            { title: '해커스교육그룹' },
                            { title: 'SK케미칼' },
                            { title: '서정대학교' },
                            { title: '전쟁기념사업회' },
                            { title: '국립생태원' },
                            { title: 'LG석유화학' },
                            { title: '하이퍼커넥트' },
                            { title: '한국저작권보호원' },
                            { title: '웅진군청' },
                            { title: '성신양회' },
                            { title: '현대 C&R' },
                            { title: '피플링크' },
                            { title: '현대자동차' },
                            { title: '스포츠안전재단' },
                            { title: '한국생산성본부인증원' },
                            { title: '투어2000' },
                            { title: 'SKC' },
                            { title: 'MBC플레이비 키자니아' },
                            { title: '국토교옽연구인프라운영원' },
                            { title: '환경부 수처리사업단' },
                            { title: '극동도시가스' },
                        ];
                        innerContent = <div className="inner">
                            <h2>Portfolio</h2>
                            <div className="features">
                                {portfolios.map(({ title }, index) => (
                                        <section key={index}>
                                            <p>{title}</p>
                                        </section>
                                    ))
                                }
                            </div>
                        </div>
                        break;
                    case 'contact':
                        innerContent = <div className="inner">
                            <h2>Get in touch</h2>
                            <div>작업중</div>
                        </div>
                        break;
                    default: 
                        innerContent = <div classNmae="inner">
                            <h1>냉무</h1>
                        </div>;
                }
                return (
                    <section key={menu.key} id={menu.label} className={menu.class}>
                        {innerContent}
                    </section>
                );
            })}
        </>
    );
};

export default Sections;
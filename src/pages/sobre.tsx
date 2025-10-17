import { Linkedin, Github, Mail } from "lucide-react";
import NavBar from "../components/NavBar/NavBar";

export default function Sobre() {
    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-8">
                <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10">

                    <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-[#00d8ff]">José Bruno</h1>
                            <p className="text-lg font-semibold text-gray-600">
                                Desenvolvedor Full-Stack Jr
                            </p>
                            <p className="mt-1 text-gray-500">
                                Santa Helena - PB, Brasil
                            </p>
                        </div>

                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a
                                href="mailto:josebrunobispoparnaiba@gmail.com"
                                target="_blank"
                                className="flex items-center gap-2 text-gray-600 hover:text-[#00d8ff] transition"
                            >
                                <Mail size={20} /> E-mail
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jose-bruno-bispo-parnaiba/?_l=pt_BR"
                                target="_blank"
                                className="flex items-center gap-2 text-gray-600 hover:text-[#00d8ff] transition"
                            >
                                <Linkedin size={20} /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/JoseBruno2005"
                                target="_blank"
                                className="flex items-center gap-2 text-gray-600 hover:text-[#00d8ff] transition"
                            >
                                <Github size={20} /> GitHub
                            </a>
                        </div>
                    </div>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-[#00d8ff] mb-2">Resumo</h2>
                        <p className="leading-relaxed">
                            Entusiasta da programação, atualmente cursando <b>Ciências da Computação</b> no 8º período.
                            Tenho paixão por desenvolvimento de software e experiência em projetos
                            que envolvem <b>Java, Spring Boot, Python, Flask, React</b> e <b>PostgreSQL</b>,
                            sempre aplicando boas práticas como arquitetura em camadas, uso de Git e foco em escalabilidade.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-[#00d8ff] mb-2">Habilidades</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "JavaScript", "React.js", "Java", "Spring Boot",
                                "SQL", "Node.js", "Clean Code",
                                "Separation of Concerns", "Reusability"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-1 bg-[#00d8ff]/10 text-[#00d8ff] rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-[#00d8ff] mb-4">Experiências</h2>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Acadêmica — Faculdade Católica da Paraíba</h3>
                            <p className="text-sm text-gray-500">2022 - Atual</p>
                            <p className="mt-1 text-gray-700">
                                Desenvolvimento de habilidades em pesquisa, análise crítica, resolução de problemas
                                e trabalho em equipe. Experiência prática com Java, Spring Boot, Python, Flask,
                                MongoDB e PostgreSQL, aplicando boas práticas e arquitetura em camadas.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Técnico em Manutenção — Autônomo</h3>
                            <p className="text-sm text-gray-500">2020 - Atual</p>
                            <p className="mt-1 text-gray-700">
                                Atuação com manutenção e suporte técnico de computadores pessoais, incluindo
                                formatação, instalação de software, diagnóstico de hardware e reparos. Atendimento
                                com foco em qualidade e satisfação do cliente.
                            </p>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-[#00d8ff] mb-2">Educação</h2>
                        <p className="font-semibold">Faculdade Católica da Paraíba</p>
                        <p className="text-gray-700">Ciências da Computação — 2022 - Atual</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-[#00d8ff] mb-2">Certificações</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Imersão Front-End — Alura (2024)</li>
                            <li>II Semana Acadêmica de Ciências da Computação — Faculdade Católica da Paraíba (2023)</li>
                            <li>Técnico em Montagem e Manutenção de Micro — MicroCenter (2018)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#00d8ff] mb-2">Projetos</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                <b>TCC 2025:</b> Aplicação full-stack para reservas do ginásio da faculdade,
                                utilizando Node.js, React e PostgreSQL com autenticação e integração via APIs RESTful.
                            </li>
                            <li>
                                <b>CodeCourses (2024):</b> Plataforma de cursos online com backend em Java (Spring Boot),
                                frontend em React e arquitetura de microsserviços.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

    );
}

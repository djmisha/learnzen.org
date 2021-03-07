import React from "react";
import "./accordion.scss";

const data = [
    {
        title: "道德经 Tao Te Ching ",
        paragraph:
            "The Tao Te Ching is traditionally credited to the 6th-century BC sage Laozi, it is the fundamental text for philosophical Taoism.",
    },
    {
        title: "What is Zen?",
        paragraph:
            " Zen is something we are, our true nature expressing itself moment by moment. Zen is also something we do, a disciplined practice through which we can realize the joy of being.",
    },
    {
        title: "What is the practice of Zen?",
        paragraph:
            "Zen is a path that must be studied, practiced, and actualized. The core of Zen is zazen, which requires motivation, patience, discipline, and dedication, and is cultivated through repeated, consistent practice.",
    },
    {
        title: "What is a Zen State of Mind? ",
        paragraph:
            "Formal Zen practice begins with two basic activities: we sit, and we breathe, with awareness. From that basic engagement, we extend the activity to include walking, chanting, eating, working and to every aspect of daily life.",
    },
    {
        title: "How do I find my Zen?",
        paragraph:
            " First, breathe in with full awareness. Appreciate it fully. Then breathe out, slowly, with equal appreciation. Hold onto nothing, give it all away. Breathe in with gratitude; breathe out with love. Receiving and offering is what we are doing each time we inhale and exhale. To do so with conscious awareness, on a regular basis, is the transformative practice we call Zen Meditaion.",
    },
    {
        title: "What Zen is Not",
        paragraph:
            "  There are many common misconceptions about Zen. It is important to know that Zen practice is not religion, is not a belief system, is not a dogma or doctrine. One does not have to be buddist to achieve a zen state of mind.",
    },
];

class Accordion extends React.Component {
    render() {
        return (
            <div {...{ className: "wrapper" }}>
                <ul {...{ className: "accordion-list" }}>
                    {data.map((data, key) => {
                        return (
                            <li {...{ className: "accordion-list__item", key }}>
                                <AccordionItem {...data} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

class AccordionItem extends React.Component {
    state = {
        opened: false,
    };

    render() {
        const {
            props: { paragraph, title },
            state: { opened },
        } = this;

        return (
            <div
                {...{
                    className: `accordion-item, ${
                        opened && "accordion-item--opened"
                    }`,
                    onClick: () => {
                        this.setState({ opened: !opened });
                    },
                }}
            >
                <div {...{ className: "accordion-item__line" }}>
                    <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
                    <span {...{ className: "accordion-item__icon" }} />
                </div>
                <div {...{ className: "accordion-item__inner" }}>
                    <div {...{ className: "accordion-item__content" }}>
                        <p {...{ className: "accordion-item__paragraph" }}>
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordion;

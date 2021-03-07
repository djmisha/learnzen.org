import React from "react";
import dataArray from "../../data";
import SinglePoemRow from "./singlePoemRow";

class PoemsTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const visiblePoem = this.props.visiblePoem;
        const poemRows = [];

        // const currentURL = window.location.href;
        // url.hash = newHash
        // console.log(currentURL);

        dataArray.forEach((poem) => {
            /*Looks for matching Text*/
            /* Search  */

            // if (poem.content.indexOf(filterText) === -1) {
            //     return;
            // }

            /*Looks for visible Poem by number*/

            if (visiblePoem === poem.number) {
                var visible = "visiblePoem";
                // let currentURL =  window.location.href + '#' + poem.number;
                // console.log(currentURL);
                // location.assign(currentURL);
                let hash = poem.number;
                document.location.hash = hash;
                // function scrollTo(hash) {
                // location.hash = "#" + hash;
                // }
                // scrollTo();
                poemRows.push(
                    <SinglePoemRow
                        number={poem.number}
                        content={poem.content}
                        key={poem.number}
                        className={visible}
                    />
                );
            }

            // if (visiblePoem === "all") {
            //     poemRows.push(
            //         <SinglePoemRow
            //             number={poem.number}
            //             content={poem.content}
            //             key={poem.number}
            //             className="visiblePoem"
            //         />
            //     );
            // }
        });

        return <ul className="all-poems">{poemRows}</ul>;
    }
}

export default PoemsTable;

import {
    addElement, 
    addInputElement,
    addTableElement,
    addSelectElement, 
    addClickEventListener, 
    pageInit,
    addClickEventInButtons
} from "./common/elements.js";
import { 
    isEmpty,
    addItem,
    getItemList,
    removeWhiteSpaceValue,
    deleteKey, 
    deleteItem,
    isDuplicateItem
} from "./common/items.js";
import words from "./common/words.js";

export default class SectionManager {
    constructor() {
        this.setPage();
        this.setSectionLineMenuButton();
     }

    setPage() {
        pageInit();
        addElement("h3", words.SECTION_LINE_SELECT_TEXT, null, null, null);
    }

    confirmDeleteSection(deleteButton) {
        const isConfirm = confirm(words.DELETE_ALERT);
        if(isConfirm) {
            // this.deleteLine(deleteButton);
            console.log(deleteButton);
        }
    }

    addTableRow(section, sectionTableTbody) {
        const row = sectionTableTbody.insertRow();
        row.setAttribute("data-section-name", section);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerHTML = sectionTableTbody.childElementCount - 1;
        cell2.innerHTML = section;
        addElement("button", words.SECTION_DELETE_TEXT, "class", words.SECTION_DELETE_BUTTON, cell3);
    }

    setTableContent(lineName) {
        const sectionTableTbody = document.getElementById(words.SECTION_TABLE_TBODY);
        const sectionList = getItemList(lineName);
        sectionTableTbody.innerHTML = "";
        if(sectionList !== null) {
            sectionList.forEach(section => {
                this.addTableRow(section, sectionTableTbody);
            });
            addClickEventInButtons(words.SECTION_DELETE_BUTTON, this.confirmDeleteSection.bind(this), false);
        }
    }

    getAlertText(order) {
        const tableRowCount = document.getElementById(words.SECTION_TABLE_TBODY).childElementCount;
        let text = "";
        if(isEmpty(order)) {
            text = words.SECTION_STATION_ORDER_INPUT_ALERT;
        }
        else if(order < 0 || order > tableRowCount) {
            text = `0~${tableRowCount} ${words.SECTION_STATION_ORDER_CORRECT_ALERT}`;
        }
        return text;
    }

    addSectionInLine(lineName, sectionStationName, order) {
        const alertText = this.getAlertText(order);
        if(alertText === "") {
            if(addItem(lineName, sectionStationName, order)) {
                this.setTableContent(lineName);
            }
            else {
                alert(`${sectionStationName}${words.SECTION_STATION_DUPLICATE_ALERT}`);
            }
        }
        else {
            alert(alertText);
        }
    }

    addSection(lineName) {
        const order = removeWhiteSpaceValue(document.getElementById(words.SECTION_ORDER_INPUT).value);
        const sectionStationSelector = document.getElementById(words.SECTION_STATION_SELECTOR);
        const sectionStationName = sectionStationSelector.options[sectionStationSelector.selectedIndex].value;
        this.addSectionInLine(lineName, sectionStationName, order);
    }

    setSectionLineElement(menuButton) {
        const sectionManagementPart = document.getElementById(words.SECTION_MANAGEMENT_PART);
        const lineName = menuButton.innerText;
        sectionManagementPart.innerHTML = "";
        addElement("h3", `${lineName} ${words.MANAGEMENT}`, null, null, sectionManagementPart);
        addElement("h4", words.SECTION_ADD_TEXT, "id", words.SECTION_ADD_TEXT_ID, sectionManagementPart);
        addSelectElement(words.SECTION_STATION_SELECTOR, sectionManagementPart);
        addInputElement(words.SECTION_ORDER_INPUT, words.ORDER, sectionManagementPart);
        addElement("button", words.ENROLLMENT, "id", words.SECTION_ADD_BUTTON, sectionManagementPart);
        addElement("p", null, null, null, sectionManagementPart);
        addTableElement([words.ORDER, words.NAME, words.SETTING], words.SECTION_TABLE_TBODY, sectionManagementPart);
        addClickEventListener(document.getElementById(words.SECTION_ADD_BUTTON), () => {this.addSection(lineName)});
        this.setTableContent(lineName);
    }
   
    setSectionLineMenuButton() {
        const lineList = getItemList(words.LINES);
        if(lineList !== null) {
            lineList.forEach(line => {
                addElement("button", line, "class", words.SECTION_LINE_MENU_BUTTON, null);
            });
            addClickEventInButtons(words.SECTION_LINE_MENU_BUTTON, this.setSectionLineElement.bind(this), false);
        }
        addElement("div", null, "id", words.SECTION_MANAGEMENT_PART, null);
    }
}
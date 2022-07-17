import { Component, Input } from "@angular/core";

@Component({
    selector: "ap-photo",
    templateUrl: "professor.component.html"
})
export class ProfessorComponent {

    @Input() nome="";
    @Input() sobre="";
    @Input() disciplina="";

}
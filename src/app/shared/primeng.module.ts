import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionModule} from 'primeng/accordion'; // <p-accordion><p-accordionTab>
import { AutoCompleteModule } from 'primeng/autocomplete'; // <p-autoComplete>
import { BlockUIModule } from 'primeng/blockui'; // <p-blockUI>
import { BreadcrumbModule } from 'primeng/breadcrumb'; // <p-breadcrumb>
import { ButtonModule } from 'primeng/button'; // <button pButton (click)=""> or <p-button (onClick)="">
import { CalendarModule } from 'primeng/calendar';  // <p-calendar>
import { CaptchaModule } from 'primeng/captcha'; //  <p-captcha> // Needs script
import { CardModule } from 'primeng/card'; // <p-card><p-header/><p-footer/>
import { CarouselModule } from 'primeng/carousel'; // <p-carousel>
import { ChartModule } from 'primeng/chart'; // <p-chart type="">
import { CheckboxModule } from 'primeng/checkbox'; // <p-checkbox>
import { ChipsModule } from 'primeng/chips'; // <p-chips>
import { CodeHighlighterModule } from 'primeng/codehighlighter'; // <pre><code class="" pCode>
import { ColorPickerModule } from 'primeng/colorpicker'; // <p-colorPicker>
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // <p-confirmDialog>
import { ContextMenuModule } from 'primeng/contextmenu'; // <p-contextMenu>
// import { DataScrollerModule } from 'primeng/datascroller'; // <p-dataScroller>
import { DataViewModule } from 'primeng/dataview'; // <p-dataView>
import { DeferModule } from 'primeng/defer'; // <div pDefer><ng-template>
import { DialogModule } from 'primeng/dialog'; // <p-dialog>
import { DragDropModule } from 'primeng/dragdrop'; // <div pDraggable="" dragHandle="">
import { DropdownModule } from 'primeng/dropdown'; // <p-drowdown>
import { EditorModule } from 'primeng/editor'; // <p-editor> Based on Quill
import { FieldsetModule } from 'primeng/fieldset'; // <p-fieldset>
import { FileUploadModule } from 'primeng/fileupload';
import {TableModule} from 'primeng'; // <p-fileUpload>

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AccordionModule,
        AutoCompleteModule,
        BlockUIModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CaptchaModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ColorPickerModule,
        ConfirmDialogModule,
        ContextMenuModule,
        DataViewModule,
        DeferModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        TableModule
    ],
    exports: [
        AccordionModule,
        AutoCompleteModule,
        BlockUIModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CaptchaModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ColorPickerModule,
        ConfirmDialogModule,
        ContextMenuModule,
        DataViewModule,
        DeferModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        TableModule
    ]
})
export class PrimengModule {
}

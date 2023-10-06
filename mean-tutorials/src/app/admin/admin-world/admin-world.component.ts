import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-admin-world',
    templateUrl: './admin-world.component.html',
    styleUrls: ['./admin-world.component.scss'],
})
export class AdminWorldComponent implements OnInit {
    items: MenuItem[] = [];
    Tdate: Date;
    RDate:Date;
    currentDate: Date = new Date();
    Tdisabledays: Date | any;
    invalidDates: Date | any;
    displayBasic: boolean = false;
    isTdisabledaysRequired: boolean = true;
    activeIndex: number = 0;
    submitted: boolean = false;
    currentTime: string | any;
    uploadedFiles: any[] = [];

    constructor(private fb: FormBuilder, private messageService: MessageService) { }
    formData: any = {
        personalInformation: {
            Ttitle:'',
            Tdescription:'',
            Tauthor:'',
            Ttime:'',
            Tdate:''
        },
        retailerInformation: {
            Rtitle:'',
            RDescription:'',
            RAuthor:'',
            RTime:'',
            RDate:'',
            SubRetailerInformation:{
                RsTitle:'',
                RsDesctiption:'',
                RsAuthor:'',
                RsTime:'',
            }
        },
        telecomInformation: {
            Tetitle:'',
            TeDescription:'',
            TeAuthor:'',
            TeTime:'',
            TeDate:'',
            SubtelecomInformation:{
                TesTitle:'',
                TesDescription:'',
                TesAuthor:'',
                TesTime:'',
                TesDate:''
            }
        },
        mediaInformation: {
            Mtitle:'',
            MDescription:'',
            MAuthor:'',
            MTime:'',
            MDate:'',
            SubmediaInformation:{
                Mstitle:'',
                MsDescription:'',
                MsAuthor:'',
                MsTime:'',
                MsDate:'',
            }
        },
        videoInformation: {
            Vtitle:'',
            VDescription:'',
            VAuthor:'',
            VTime:'',
            VDate:''
        },
    };
    ngOnInit(): void {
        this.setCurrentTime();
        this.items = [
            {
                label: 'Top',  command: (event: any) => {
                    this.activeIndex = 0;
                    this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Retailer', command: (event: any) => {
                    this.activeIndex = 1;
                    this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Telecom', command: (event: any) => {
                    this.activeIndex = 2;
                    this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Media', command: (event: any) => {
                    this.activeIndex = 3;
                    this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Video', command: (event: any) => {
                    this.activeIndex = 4;
                    this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
            // Add labels for other steps
        ];
    }

    showBasicDialog() {
        this.displayBasic = true;
        this.activeIndex = 0;
    }

    nextPage() {
        if (this.activeIndex < this.items.length - 1) {
            this.activeIndex++;
        }
    }

    prevPage() {
        if (this.activeIndex > 0) {
            this.activeIndex--;
        }
    }

    onStepChange(event: any) {
        this.activeIndex = event.index;
    }

    complete() {
        this.submitted = true;
        if (this.activeIndex === this.items.length - 1) {
            // Submit the form here
            console.log('Form submitted successfully');
            this.displayBasic = false;
        }
    }

    //set date
    setCurrentTime() {
        const now = new Date();
        const currentTime = `${this.padZero(now.getHours())}:${this.padZero(
            now.getMinutes()
          )}:${this.padZero(now.getSeconds())}`;
          this.formData.personalInformation.Ttime = currentTime;
          this.formData.retailerInformation.RTime = currentTime;
          this.formData.retailerInformation.SubRetailerInformation.RsTime = currentTime;
          this.formData.videoInformation.VTime = currentTime;
          this.formData.mediaInformation.SubmediaInformation.MsTime = currentTime;
          this.formData.mediaInformation.MTime = currentTime;
          this.formData.telecomInformation.SubtelecomInformation.TesTime = currentTime;
          this.formData.telecomInformation.TeTime = currentTime;
      }
    
      // Helper method to pad single digits with leading zeros
      padZero(num: number): string {
        return num < 10 ? `0${num}` : num.toString();
      }
    // upload file
    onBasicUploadAuto(event: any) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' })
    }
}

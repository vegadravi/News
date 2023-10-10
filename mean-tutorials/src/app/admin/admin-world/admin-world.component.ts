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
    RDate: Date;
    // Add properties to store uploaded image and video files
    imageArraysMap: { [key: string]: File[] } = {
        'personalInformation': [],
        'retailerInformation': [],
        'telecomInformation': [],
        'mediaInformation': [],
        'videoInformation': [],
      };

    currentDate: Date = new Date();
    Tdisabledays: Date | any;
    invalidDates: Date | any;
    displayBasic: boolean = false;
    isTdisabledaysRequired: boolean = true;
    activeIndex: number = 0;
    submitted: boolean = false;
    currentTime: string | any;
    fubImage: any;
    uploadedImageFiles: any[] = [];
    uploadedVideoFiles: any[] = [];

    constructor(private fb: FormBuilder, private messageService: MessageService) { }
    formData: any = {
        personalInformation: {
            Ttitle: '',
            Tdescription: '',
            Tauthor: '',
            Ttime: '',
            Tdate: '',
        },
        retailerInformation: {
            Rtitle: '',
            RDescription: '',
            RAuthor: '',
            RTime: '',
            RDate: '',
            SubRetailerInformation: {
                RsTitle: '',
                RsDesctiption: '',
                RsAuthor: '',
                RsTime: '',
            }
        },
        telecomInformation: {
            Tetitle: '',
            TeDescription: '',
            TeAuthor: '',
            TeTime: '',
            TeDate: '',
            SubtelecomInformation: {
                TesTitle: '',
                TesDescription: '',
                TesAuthor: '',
                TesTime: '',
                TesDate: ''
            }
        },
        mediaInformation: {
            Mtitle: '',
            MDescription: '',
            MAuthor: '',
            MTime: '',
            MDate: '',
            SubmediaInformation: {
                Mstitle: '',
                MsDescription: '',
                MsAuthor: '',
                MsTime: '',
                MsDate: '',
            }
        },
        videoInformation: {
            Vtitle: '',
            VDescription: '',
            VAuthor: '',
            VTime: '',
            VDate: ''
        },
    };
    ngOnInit(): void {
        this.setCurrentTime();
        this.items = [
            {
                label: 'Top', command: (event: any) => {
                    this.activeIndex = 0;
                    this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            },
            {
                label: 'Retailer', command: (event: any) => {
                    this.activeIndex = 1;
                    this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            },
            {
                label: 'Telecom', command: (event: any) => {
                    this.activeIndex = 2;
                    this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            },
            {
                label: 'Media', command: (event: any) => {
                    this.activeIndex = 3;
                    this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            },
            {
                label: 'Video', command: (event: any) => {
                    this.activeIndex = 4;
                    this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
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
        const sectionsToUpdate = [
          'personalInformation',
          'retailerInformation',
          'telecomInformation',
          'mediaInformation',
          'videoInformation'
        ];
      
        sectionsToUpdate.forEach(section => {
          if (this.imageArraysMap[section].length > 0) {
            this.formData[section].uploadedImages = [...this.imageArraysMap[section]];
          }
        });
      
        const formDataJSON = JSON.stringify(this.formData);
        localStorage.setItem('formData', formDataJSON);
      
        console.log('R4x this.formData', this.formData);
        if (this.activeIndex === this.items.length - 1) {
          // Submit the form here
          console.log('R4x Form submitted successfully', this.formData);
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
    onBasicUploadAuto(event: any, type: string) {
        console.log('R4x event', event, type);
        const currentSection = this.getCurrentSection();
        
        if (currentSection) {
          if (type === 'image') {
            this.imageArraysMap[currentSection].push(...event.files);
            console.log('R4x ', this.imageArraysMap[currentSection]);
          } else if (type === 'video') {
            this.uploadedVideoFiles.push(...event.files);
          }
        }
      }
      getCurrentSection(): string | null {
        const sections = [
          'personalInformation',
          'retailerInformation',
          'telecomInformation',
          'mediaInformation',
          'videoInformation'
        ];
      
        if (this.activeIndex >= 0 && this.activeIndex < sections.length) {
          return sections[this.activeIndex];
        }
      
        return null;
      }
      

}

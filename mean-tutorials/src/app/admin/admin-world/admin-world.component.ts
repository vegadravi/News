import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { StandaloneModule } from 'src/app/module/standalone/standalone.module';

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
		'WTopnewsInformation': [],
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
		WTopnewsInformation: [],
		retailerInformation: {
			Rtitle: '',
			RDescription: '',
			RAuthor: '',
			RTime: '',
			RDate: '',
			SubRetailerInformation: []
		},
		telecomInformation: {
			Tetitle: '',
			TeDescription: '',
			TeAuthor: '',
			TeTime: '',
			TeDate: '',
			SubtelecomInformation: []
		},
		mediaInformation: {
			Mtitle: '',
			MDescription: '',
			MAuthor: '',
			MTime: '',
			MDate: '',
			SubmediaInformation: []
		},
		videoInformation:[],
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
	//video news
	addNewVideoInformation() {
		const newVideoInformation ={
			Vtitle: '',
			VDescription: '',
			VAuthor: '',
			VTime: '',
			VDate: ''
		}
		this.formData.videoInformation.push(newVideoInformation);

	  }
	removeVideoInformation(index: number) {
		this.formData.videoInformation.splice(index, 1);
	}
	//world news
	addWTopnewsInformation() {
		const newWorldInformation = {
			Ttitle: '',
			Tdescription: '',
			Tauthor: '',
			Ttime: '',
			Tdate: '',
		};
		this.formData.WTopnewsInformation.push(newWorldInformation);
	}

	removeWTopnewsInformation(index: number) {
		this.formData.WTopnewsInformation.splice(index, 1);
	}
	// sub TelecomeInformation
	addSubTelecomInformation() {
		const subTelecomInfo = {
			Mstitle: '',
			MsDescription: '',
			MsAuthor: '',
			MsTime: '',
			MsDate: '',
		};
		this.formData.telecomInformation.SubtelecomInformation.push(subTelecomInfo);
	}

	removeSubTelecomInformation(index: number) {
		this.formData.telecomInformation.SubtelecomInformation.splice(index, 1);
	}
	addSubRetailerInformation() {
		const subRetailerInfo = {
			RsTitle: '',
			RsDesctiption: '',
			RsAuthor: '',
			RsTime: '',
			RsDate: ''
		};
		this.formData.retailerInformation.SubRetailerInformation.push(subRetailerInfo);
	}

	removeSubRetailerInformation(index: number) {
		this.formData.retailerInformation.SubRetailerInformation.splice(index, 1);
	}
	addSubMediaInformation() {
		const subMediaInfo = {
			RsTitle: '',
			RsDesctiption: '',
			RsAuthor: '',
			RsTime: '',
			RsDate: ''
		};
		this.formData.mediaInformation.SubmediaInformation.push(subMediaInfo);
	}

	removeSubMediaInformation(index: number) {
		this.formData.mediaInformation.SubmediaInformation.splice(index, 1);
	}
	complete() {
		const sectionsToUpdate = [
			'WTopnewsInformation',
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
		console.log('R4x sectionToUpdate',sectionsToUpdate,this.formData);
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
	// ...

	setCurrentTime() {
		const now = new Date();
		const currentTime = `${this.padZero(now.getHours())}:${this.padZero(
			now.getMinutes()
		)}:${this.padZero(now.getSeconds())}`;

		// Set current time for top-level properties
		this.formData.WTopnewsInformation.forEach((entry: any) => {
			entry.Ttime = currentTime;
		});
		this.formData.retailerInformation.RTime = currentTime;
		this.formData.retailerInformation.SubRetailerInformation.forEach((subRetailerInfo: any) => {
			subRetailerInfo.RsTime = currentTime;
		});
		this.formData.videoInformation.VTime = currentTime;
		this.formData.mediaInformation.MTime = currentTime;
		this.formData.mediaInformation.SubmediaInformation.forEach((subMediaInfo: any) => {
			subMediaInfo.MsTime = currentTime;
		});
		this.formData.telecomInformation.TeTime = currentTime;
		this.formData.telecomInformation.SubtelecomInformation.forEach((subTelecomInfo: any) => {
			subTelecomInfo.TesTime = currentTime;
		});
	}

	padZero(num: number): string {
		return num < 10 ? `0${num}` : num.toString();
	}
	// upload file
	onBasicUploadAuto(event: any, type: string) {
		const currentSection = this.getCurrentSection();
	  
		if (currentSection) {
		  if (type === 'image') {
			console.log('R4x type ',type);
			// Handle the image files and add them to the imageArraysMap
			this.imageArraysMap[currentSection] = [...event.files];
			console.log('Image files uploaded:', this.imageArraysMap[currentSection]);
		  } else if (type === 'video') {
			console.log('R4x type video',type);
			this.imageArraysMap[currentSection] = [...event.files];
			console.log('Video files uploaded:', this.imageArraysMap[currentSection]);
		  }
		}
	  }
	  
	getCurrentSection(): string | null {
		const sections = [
			'WTopnewsInformation',
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

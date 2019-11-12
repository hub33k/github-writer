/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

export default class GitHubEditor extends DecoupledEditor {
	constructor( initialData ) {
		super( initialData, {
			plugins: [
				Essentials, Paragraph,
				Bold, Italic
			],
			toolbar: [ 'bold', 'italic' ],
			placeholder: 'Leave a comment'
		} );

		this.data.processor = new GFMDataProcessor();
	}
}
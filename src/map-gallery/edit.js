import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, NumberControl, RangeControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }){
	const {
		hoverGrowScale,
		mapHeight,
		mapWidth,
		imgIconInitialHeight,
		imgIconInitialWidth,
	} = attributes;

	const blockProps = useBlockProps({
		style: {
			'--hover-grow-scale': hoverGrowScale,
			'--map-height': mapHeight,
			'--map-width': mapWidth,
			'--img-icon-initial-height': imgIconInitialHeight,
			'--img-icon-initial-width': imgIconInitialWidth,
		}, });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'Map Gallery')}>
					<RangeControl
						label={__('Hover Grow Scale', 'Map Gallery')}
						value={hoverGrowScale}
						onChange={(val) => setAttributes({ hoverGrowScale: val })}
						min={0.5}
						max={2}
					/>
					<NumberControl
						label={__('Map Height', 'Map Gallery')}
						value={mapHeight}
						onChange={(val) => setAttributes({ mapHeight: val })}
					/>
					<NumberControl
						label={__('Map Width', 'Map Gallery')}
						value={mapWidth}
						onChange={(val) => setAttributes({ galleryColumns: val })}
					/>
					<NumberControl
						label={__('Map Icon Image Height', 'Map Gallery')}
						value={galleryColumns}
						onChange={(val) => setAttributes({ galleryColumns: val })}
					/>
					<NumberControl
						label={__('Map Icon Image Width', 'Map Gallery')}
						value={galleryColumns}
						onChange={(val) => setAttributes({ galleryColumns: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<p>{__('Preview (images load on frontend)', 'Map Gallery')}</p>
			</div>
		</>
	);
}

import React from 'react';
import { icons } from './index'; // Adjust the import path as needed
import { cn } from '../utils/utils'; // Adjust the import path as needed

export type IconNames =
  | 'trainingCenter'
  | 'enroledCandidates'
  | 'certifiedCandidates'
  | 'fullCoverage'
  | 'arrowTopRight'
  | 'skillTraining'
  | 'ourAffirmations'
  | 'ourSectors'
  | 'contactUs';

interface SvgIconProps {
  name: IconNames;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, className }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={cn(className)} /> : null;
};

export default SvgIcon;

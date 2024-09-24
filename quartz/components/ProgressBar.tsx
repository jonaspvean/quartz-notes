
export type ProgressBarProps = {
    progress: number;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
    const _progress = Math.min(Math.max(0, progress), 100);
    
}
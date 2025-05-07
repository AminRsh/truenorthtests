
"use client";

import usePremiumModal from '@/hooks/usePremiumModal';
import { Button } from '@/components/ui/button';
import { PlusSquare } from 'lucide-react';

export default function PremiumButton() {
    const premiumModal = usePremiumModal();
    return <Button
            onClick={() => {
                premiumModal.setOpen(true)
                console.log('Clicked upgrade')
            }}
            className="mx-auto flex w-fit gap-2" style={{backgroundColor: 'rgb(25 128 230)', color: 'white'}}>
            <PlusSquare className="size-5" />
            <span className="text-white text-sm font-medium leading-normal">Upgrade</span>
            
        </Button>
    
}